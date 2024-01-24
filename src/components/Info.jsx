import React from 'react'

const Info = ({info,loading}) => {
  
    if(loading){
        return <h2>loading</h2>;
    }

    return(
      <ul>
        {info.map(item=>(
          <li key={item.area} >
            {item.name.common}
            
          </li>
        ))}
      </ul>
  )
}

export default Info