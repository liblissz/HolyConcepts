import React, { useContext } from 'react'
import './CSS/ShopCtegory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/assets/Frontend_Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const Shopcategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price}/>

          }else{
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        explore more
      </div>
    </div>
  )
}

export default Shopcategory
