import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom'; // ✅ Required for navigation

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/Product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
      </Link>
      <p className='name'>{props.name}</p>
      <div className="item-prices">
        <div className="item-new-prices">
          {props.new_price}frs
        </div>
        <div className="item-old-prices">
          {props.old_price}frs
        </div>
      </div>
    </div>
  );
};

export default Item;
