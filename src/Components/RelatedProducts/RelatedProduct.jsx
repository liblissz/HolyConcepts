import React from 'react'
import './RelatedProduct.css'
import data_product from '../assets/Frontend_Assets/data'
import Item from '../Item/Item'
const RelatedProduct = () => {
  return (
    <div className='RelatedProduct'>
      <h1>Related products</h1>
      <hr />
      <div className="relatedproduct-item">
{data_product.map((item,i)=>{
   return <Item  key={i} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price}/>

})}
      </div>
    </div>
  )
}

export default RelatedProduct
