import React from 'react'
import './styles/Pagination.css'

const Pagination = ({limitPerPage, totalInfo, paginate,currentPage,totalPages}) => {

    const pageNumbers=[];
    

    for (let i=1; i<= Math.ceil(totalInfo/limitPerPage);i++){
        pageNumbers.push(i)
    }

    console.log(currentPage);
    
  return (
    <nav className='container__pagination'>
        <ul className='list__pagination'>
            <li onClick={()=>paginate(currentPage-1)} className='item__pagination'>&lt;</li>
            <li onClick={()=>paginate(1)}className={ `item__pagination ${currentPage> 5?'':'disapear'} `}>1</li>
            <li className={`points ${currentPage< 5||currentPage==1?'disapear':''}`} >...</li>
            {
            currentPage<=5 &&totalPages>5?  pageNumbers.slice(0,5).map(number=>(
                    
                    
                <li onClick={()=>paginate(number)} className={`item__pagination ${currentPage==number?'btn__page__active':''}`} key={number}>
                    <a className='content__pagination' href='!#'>
                        {number}
                    </a>
                </li>

            )):
            
            currentPage>5 &&currentPage<=totalPages-5?
            
            
            
            pageNumbers.slice(currentPage-2,currentPage+1).map(number=>
                
                                        
                    <li onClick={()=>paginate(number)} className={`item__pagination ${currentPage==number?'btn__page__active':''}`} key={number}>
                        <a className='content__pagination' href='!#'>
                            {number}
                        </a>
                    </li>

            ):currentPage >totalPages-5?

            pageNumbers.slice(totalPages-5,totalPages).map(number=>
                
                                        
                <li onClick={()=>paginate(number)} className={`item__pagination ${currentPage==number?'btn__page__active':''}`} key={number}>
                    <a className='content__pagination' href='!#'>
                        {number}
                    </a>
                </li>
             
            ):''
            }
            <li className={`points ${currentPage<= totalPages-5?'':'disapear'}`}>...</li>
            <li onClick={()=>paginate(totalPages) }className={`item__pagination ${currentPage<=totalPages-5?'':'disapear'}`}>{totalInfo/limitPerPage}</li>
            <li onClick={()=>paginate(currentPage+1)} className='item__pagination'>&gt;</li>
        </ul>
    </nav>
  )
}

export default Pagination