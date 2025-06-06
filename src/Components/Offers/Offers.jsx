import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/Frontend_Assets/hero_image.jpg'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
<h1>exclusive</h1>
<h1>offers for you</h1>
<p>only the best photoshoots</p>
<button>Check now</button>
      </div>
      <div className="offers-right">
<img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
