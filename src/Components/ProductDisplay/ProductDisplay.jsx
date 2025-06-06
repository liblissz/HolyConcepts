import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/Frontend_Assets/star_icon.png'
import stardull_icon from '../assets/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
      <div className='productdisplay-img-list'>
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
    </div>
    <div className="productdisplay-img">
        <img className='productdisplay-main-image' src={product.image} alt="" />
    </div>
    </div>
    <div className='productdisplay-right'>
      <h1>{product.name}</h1>
      <div className="productdisplay-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={stardull_icon} alt="" />
        <p>(122)</p>
      </div>
      <div className="productdisplay-right-prices">
        <div className="productdisplay-right-prices-old">
            {product.old_price}frs
        </div>
        <div className="productdisplay-right-prices-new">
            {product.new_price}frs
        </div>
      </div>
      <div className="productdisplay-right-discription">
       Here you can keep saving your products such that you can give reference
        to when you can to hole concept studio
      </div>
      <div className="productdisplay-right-size">
        <h1>Our Enlargement Sizes Size</h1>
        <div className="productdisplay-right-sizes">
            <div>4x4</div>
            <div>3x4</div>
            <div>2x2</div>
            <div>10x13</div>
            <div>16x17</div>
        </div>
      </div>
      <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
    <p className="productdisplay-right-category">
        <span>Category : </span> Women, Tishirt, Crop-Top
    </p>
    <p className="productdisplay-right-category">
        <span>Tags : </span> HOLYCONCEPT STUDIO, VICK DYNAMICS
    </p>
    </div>
    </div>
  )
}

export default ProductDisplay
