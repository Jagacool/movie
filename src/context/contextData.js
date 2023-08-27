import React, { createContext, useState, useContext } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <DataContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </DataContext.Provider>
  );
};
