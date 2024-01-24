import React from 'react'
import './styles/Pagination.css'

const Pagination = ({limitPerPage, totalInfo, paginate,currentPage}) => {

    const pageNumbers=[];

    for (let i=1; i<= Math.ceil(totalInfo/limitPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <nav className='container__pagination'>
        <ul className='list__pagination'>
            <li onClick={()=>paginate(currentPage-1)} className='item__pagination'>&lt;</li>
            <li>1</li>
            {                
                pageNumbers.map(number=>(
                    
                    
                    <li onClick={()=>paginate(number)} className={`item__pagination ${currentPage==number? 'btn__page__active':''}`} key={number}>
                        <a className='content__pagination' href='!#'>
                            {number}
                        </a>
                    </li>

                ))
            }
            <li>{totalInfo/limitPerPage}</li>
            <li onClick={()=>paginate(currentPage+1)} className='item__pagination'>&gt;</li>
        </ul>
    </nav>
  )
}

export default Pagination