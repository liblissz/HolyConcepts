import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assets/Frontend_Assets/logo.png'
import cart_icon from '../assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../assets/Frontend_Assets/nav_dropdown.png'
const Navbar = () => {
    const [menu, setmenu] = useState("shop")
    const {getTotalCartItem} = useContext(ShopContext)
    const menuRef = useRef()
const dropdown_toggle = (e) =>{
menuRef.current.classList.toggle("nav-visible-menu")
e.target.classList.toggle("open")
}

  return (
    <div className='Navbar'>
<div className="nav-logo">
    <img src={logo} alt="" />
    <p>HOLY CONCEPTS</p>
</div>
<img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
<ul ref={menuRef} className="nav-menu">
<li onClick={()=>{setmenu("shop")}}> <Link style={{textDecoration: "none"}} to='/'>shop</Link> {menu === "shop"? <hr/>: ""}</li>
    <li onClick={()=>{setmenu("men")}}><Link style={{textDecoration: "none"}} to='/mens'>men</Link> {menu === "men"? <hr/>: ""}</li>
    <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration: "none"}} to='/womens'>women</Link> {menu === "women"? <hr/>: ""}</li>
    <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: "none"}} to='/kids'>kids</Link>  {menu === "kids"? <hr/>: ""}</li>

</ul>
<div className="nav-login-cart">
{localStorage.getItem('auth-token')?
<button  onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>logout</button>:
    <Link to='/login'><button>Login</button></Link>
}
<Link to='/card'> <img src={cart_icon} alt="" /></Link>
 <div className="nav-card-count">{getTotalCartItem()}</div>
</div>
    </div>
  )
}

export default Navbar
