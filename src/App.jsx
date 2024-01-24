import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Info from './components/Info'
import Pagination from './components/Pagination'
function App() {
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage]=useState(1)
  const [limitPerPage, setLimitPerPage]=useState(5)

  useEffect(()=>{
    const fetchInfo = async()=>{
      setLoading(true)
      const res = await axios.get('https://restcountries.com/v3.1/all');
      setInfo(res.data);
      setLoading(false)
    }
    fetchInfo();

  },[]);

  //Ger current Info
  const indexOfLastPost = currentPage * limitPerPage
  const indexOfFirstPost = indexOfLastPost -limitPerPage;
  const currentInfo = info.slice(indexOfFirstPost, indexOfLastPost);


  //On change Page
  const totalPages =Math.ceil(info.length / limitPerPage)

  const paginate=(pageNumber)=>{
   
    if(pageNumber>=totalPages) {
      setCurrentPage(totalPages)
    }else if(pageNumber<=1){
      setCurrentPage(1)
    }else{
      setCurrentPage(pageNumber)

    }

  }


  console.log(info);
  


  return (
    
      <div>
        <h1>Hola Pagination</h1>
        < Info info={currentInfo} loading={loading}/>
        <Pagination 
        limitPerPage={limitPerPage} 
        totalInfo={info.length} 
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
        />
        
        
      </div>
      
  )
}

export default App
