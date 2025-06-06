import React, { useContext, useState } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../assets/Frontend_Assets/cart_cross_icon.png'

const CartItem = () => {
    const { getTotalCartAmount, all_product,cartItem, addToCart, removeFromCart } = useContext(ShopContext)
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

     const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('');
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append('access_key', '562ad937-34b9-4d4e-8e95-a088088d7ed1');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('✅ Message sent successfully!');
        event.target.reset();
      } else {
        setStatus('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('❌ Error occurred. Please check your connection.');
    }

    setLoading(false);
  };

  return (
    <div className='cartitem'>
      <div className="cart-item-format-main none">
        <p>products</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <hr />
    {all_product.map((e)=>{
if(cartItem[e.id]>0){
    return(
          <div className="cartitem-format cart-item-format-main">
        <img src={e.image} className='cart-product-icon' alt="" />
        <p>{e.name}</p>
        <p>{e.new_price}frs</p>
        <button className='cartitem-quantity'>{cartItem[e.id]}</button>
        <p>{e.new_price*cartItem[e.id]}</p>
        <img className='carditem-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
        
      </div>
     
    )
}
return null
    })}
    <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart total</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>sub total</p>
                    <p>{getTotalCartAmount()}frs</p>
                </div>
                <hr />
                {/* <div className="cartitem-total-item">
                    <p>sheeping fee</p>
                    <p>free</p>
                </div> */}
                <hr />
                <div className="cartitem-total-item">
                    <h3>total</h3>
                    <h3>{getTotalCartAmount()}frs</h3>
                </div>
            </div>
            <a href="tel: 654598457"><button>Call Us For This Snapshots(click here)</button></a>
        </div>
        <form onSubmit={onSubmit} className="cartitems-promocode">
            <p>You Can Also Give Us And Email</p>
            <div className="cartitem-promobox">
                <input name="name" type="text" placeholder='Your Name ' />
            </div>
             <div className="cartitem-promobox">
                <input name="email" type="email" placeholder='Your  Email' />
            </div>
              <div className="cartitem-promobox">
                <input name="message" type="text" placeholder='Your  Message' />
            </div>
               <button type="submit" disabled={loading} > {loading ? 'Sending...' : 'Submit Form'} </button>
        </form>
           
    </div>
 {status && <p className="form-status">{status}</p>}
    </div>
  )
}

export default CartItem
