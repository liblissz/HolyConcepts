import React, { useState } from 'react';
import './Newsteller.css';

const Newsteller = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("❌ Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch('https://holyconceptsbackend.onrender.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("✅ Subscription successful. Check your inbox.");
        setEmail("");
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("❌ Something went wrong. Try again later.");
    }
  };

  return (
    <div className='newsteller'>
      <h2>Get exclusive offers on your email</h2>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {message && <p className='message'>{message}</p>}
    </div>
  );
};

export default Newsteller;









// import React from 'react'
// import './Newsteller.css'
// const Newsteller = () => {
//   return (
//     <div className='newsteller'>
//       <h2>Gives exclusive offers on your email</h2>
//       <p>subscribe to our newsteller and stay updated</p>
//       <div>
//         <input type="email" placeholder='enter your email id' />
//         <button>subscribe</button>
//       </div>
//     </div>
//   )
// }

// export default Newsteller
