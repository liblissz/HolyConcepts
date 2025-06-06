import React, { useEffect, useState } from 'react';
import './NewCollection.css';
import Item from '../Item/Item';

const NewCollection = () => {
  const [new_collection, setnew_collection] = useState([]);

  useEffect(() => {
    fetch('https://holyconceptsbackend.onrender.com/newcollection')
      .then((response) => response.json())
      .then((data) => setnew_collection(data));
  }, []);

  return (
    <div className="new-collection">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_collection.length === 0 ? (
          <p>Loading or no new collection available.</p>
        ) : (
          new_collection.map((item, i) => (
            <Item
              key={item.id || i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewCollection;
