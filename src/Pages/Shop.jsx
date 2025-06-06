import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import Hero from '../Components/hero/Hero';
import Item from '../Components/Item/Item';
import Populate from '../Components/Popular/Populate';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollection/NewCollection';
import Newsteller from '../Components/Newsteller/Newsteller';

const Shop = () => {
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
      <Populate />
      <Offers />
      <NewCollection />
      <Newsteller />
    </div>
  );
};

export default Shop;
