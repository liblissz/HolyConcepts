import React, { useEffect, useRef } from 'react';
import './Network.css';

const NetworkStatus = () => {
  const statusRef = useRef(null);

  function show(message, bgColor) {
    if (statusRef.current) {
      statusRef.current.textContent = message;
      statusRef.current.style.background = bgColor;
      statusRef.current.className = 'show';
      setTimeout(() => {
        if (statusRef.current) {
          statusRef.current.classList.remove('show');
        }
      }, 2000);
    }
  }

  function remain(message, bgColor){
     if (statusRef.current) {
      statusRef.current.textContent = message;
      statusRef.current.style.background = bgColor;
      statusRef.current.className = 'show';
     }
  }
  function updateStatus() {
    if (navigator.onLine) {
      show("🟢 You are connected", "green");
    } else {
      remain("🔴 You are not connected", "red");
    }
  }

  useEffect(() => {
    // Run initially
    updateStatus();

    // Event listeners
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

    // Interval
    const intervalId = setInterval(updateStatus, 5000);

    // Cleanup
    clearInterval(intervalId);
    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
      clearInterval(intervalId);
    };
  }, []);
  

  return (
    <div className='online'>
      <p id='status' ref={statusRef}></p>
    </div>
  );
};

export default NetworkStatus;
