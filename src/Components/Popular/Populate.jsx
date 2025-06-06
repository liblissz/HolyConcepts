import React, { useState,useEffect } from 'react'
import './Populate.css'

import Item from '../Item/Item'
const Populate = () => {
  const [popular, setpopular] = useState([])
 useEffect(() => {
     fetch('https://holyconceptsbackend.onrender.com/popurlarinwomen')
       .then((response) => response.json())
       .then((data) => setpopular(data));
   }, []);
  return (
    <div className='popular'>
      <h1>POPULAR PHOTOSHOOTS</h1>
      <hr />
      <div className="popular-item">
        {popular.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Populate
