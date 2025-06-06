
import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

// Helper function to initialize the cart with product IDs
const getDefaultCart = () => {
  const cart = {};
  for (let i = 1; i <= 300+1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [all_product, setAllProduct] = useState([]);
  const [cartItem, setCartItem] = useState(getDefaultCart());

  // Fetch products from server
 useEffect(() => {
  // Fetch all products
  fetch("https://holyconceptsbackend.onrender.com/allproducts")
    .then((response) => response.json())
    .then((data) => {
      if (data.success && data.products) {
        setAllProduct(data.products);
      } else {
        console.error("❌ Failed to fetch products:", data);
      }
    })
    .catch((error) => console.error("❌ Fetch error:", error));

  // Fetch cart data if token is available
  const token = localStorage.getItem('auth-token'); // ✅ FIXED typo ('uath-token' ➜ 'auth-token')
  if (token) {
    fetch("https://holyconceptsbackend.onrender.com/getcart", {
      method: "POST",
      headers: {
        Accept: "application/json", // ✅ Changed to proper MIME type
        "auth-token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({}) // ✅ Body must be valid JSON if Content-Type is JSON
    })
      .then((response) => response.json())
      .then((data) => {
        setCartItem(data); // ✅ You may want to check if `data` has the format you expect
      })
      .catch((error) => console.error("❌ Cart fetch error:", error));
  }
}, []);

  // Add to cart
  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
   if(localStorage.getItem('auth-token')){
    fetch('https://holyconceptsbackend.onrender.com/addtocart', {
      method: "POST",
      headers:{
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem('auth-token')}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"itemId": itemId})
    })   .then((response) => response.json())
      .then((data) => console.log(data));
   }
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));

if(localStorage.getItem('auth-token')){
    fetch('https://holyconceptsbackend.onrender.com/removefromcart', {
      method: "POST",
      headers:{
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem('auth-token')}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"itemId": itemId})
    })   .then((response) => response.json())
      .then((data) => console.log(data));
   }
  
  
}
    //http://localhost:2000/removefromcart


  // Calculate total price
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        const product = all_product.find(
          (prod) => prod._id === itemId || prod.id === Number(itemId)
        );
        if (product) {
          totalAmount += product.new_price * cartItem[itemId];
        }
      }
    }
    return totalAmount;
  };

  // Count total items in cart
  const getTotalCartItem = () => {
    let totalItems = 0;
    for (const itemId in cartItem) {
      totalItems += cartItem[itemId];
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
















// import React, { createContext, useEffect, useState } from "react";
// // ✅ fixed name
// // import all_product from '../Components/assets/Frontend_Assets/all_product'
// export const ShopContext = createContext(null);

//  const getDefaultCart = ()=>{
//     let cart = {}
//   for (let index = 0; index < 300+1; index++) {
// cart[index]= 0;
//   }
//   return cart
//   }

// const ShopContextProvider = (props) => {
//   const [all_product, setall_product] = useState([])
//  const [cartItem, setCartItem] = useState(getDefaultCart())
// useEffect(()=>{
// fetch('http://localhost:2000/allproducts').then((response)=> response.json())
// .then((data)=>setall_product(data))
// },[])

//  const addToCart = (itemId)=>{
// setCartItem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
// console.log(cartItem)
//  }
//   const removeFromCart = (itemId)=>{
// setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
//  }
// const getTotalCartAmount = () => {
//   let totalAmount = 0;
//   for (const item in cartItem) {
//     if (cartItem[item] > 0) {
//       let item_info = all_product.find((product) => product.id === Number(item));
//       totalAmount += item_info.new_price * cartItem[item];
//     }
//   }
//   return totalAmount;
// };

//  const getTotalCartItem = () => {
//     let totalitem = 0;
//     for (const item in cartItem) {
//       if (cartItem[item] > 0) {
//         totalitem += cartItem[item];
//       }
//     }
//     return totalitem;
//   };

//   const contextValue = { getTotalCartItem, getTotalCartAmount, all_product, cartItem, addToCart, removeFromCart }; 

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
