import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Hero from '../Components/hero/Hero';
import Item from '../Components/Item/Item';
import Populate from '../Components/Popular/Populate';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollection/NewCollection';
import Newsteller from '../Components/Newsteller/Newsteller';
import Shimer from '../Components/Shimerload/Shimer';

const Shop = () => {
 const [load, setload]  = useState(true)
  useEffect(()=> {
    const timer = setTimeout(()=>{
         setload(false)
       }, 10000)

    return ()=> clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Ask for notification permission
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    // Connect to socket.io backend at localhost:3000
    const socket = io('http://localhost:3000');

    // Listen for 'notify' event
    socket.on('message', (message) => {
      if (Notification.permission === 'granted') {
        new Notification('HOLY CONCEPTS Notification', {
          body: message,
          icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827344.png',
        });
      }
    });

    // Cleanup socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <Hero />
      
      {load? <Shimer/>: <Populate /> }
      <Offers />
      
      {load? <Shimer/>: <NewCollection />}
      <Newsteller />
    </div>
  );
};

export default Shop;
