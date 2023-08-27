// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  // Function to add an item to the cart
  const addItemToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(prevCartItems => prevCartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };
  
  // Function to increase the quantity of an item
  const increaseQuantity = (itemId) => {
    setCartItems(prevCartItems => prevCartItems.map(cartItem =>
      cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    ));
  };
  
  // Function to decrease the quantity of an item
  const decreaseQuantity = (itemId) => {
    setCartItems(prevCartItems => prevCartItems.map(cartItem =>
      cartItem.id === itemId && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ));
  };

  // Calculate total quantity and amount
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <DataContext.Provider
      value={{
        cartItems,
        totalQuantity,
        totalAmount,
        addItemToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
