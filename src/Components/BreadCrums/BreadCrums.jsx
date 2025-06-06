import React from 'react';
import './Breadcrums.css';
import bread_crum_arrow from '../assets/Frontend_Assets/breadcrum_arrow.png';

const BreadCrums = ({ product }) => {
  return (
    <div className='breadcrum'>
      HOME 
      <img src={bread_crum_arrow} alt=">" />
      SHOP 
      <img src={bread_crum_arrow} alt=">" />
      {product.category}
      <img src={bread_crum_arrow} alt=">" />
      {product.name}
    </div>
  );
};

export default BreadCrums;
