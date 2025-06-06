import React from 'react'
import './Footer.css'
import footer_logo from '../assets/Frontend_Assets/logo_big.png'
import instergram_icon from '../assets/Frontend_Assets/instagram_icon.png'
// import pintester_icon from '../assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../assets/Frontend_Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>HOLY CONCEPTS</p>
      </div>
      <ul className="footer-links">
        <li>Home</li>
        <li>contact</li>
      <li>  <a style={{textDecoration: "none", color: "#333"}} href="http://localhost:5174/mens">women</a></li>
      <li><a style={{textDecoration: "none", color: "#333"}}  href="http://localhost:5174/womens"></a> men</li>
        <li><a style={{textDecoration: "none", color: "#333"}}  href="http://localhost:5174/kids">kids</a></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instergram_icon} alt="" />
        </div>
          {/* <div className="footer-icon-container">
            <img src={pintester_icon} alt="" />
        </div> */}
          <div className="footer-icon-container">
            <a href="http://wa.me/23752347613"><img src={whatsapp_icon} alt="" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        &copy; copyright || all right reserved by Holy Concept
      </div>
    </div>
  )
}

export default Footer
