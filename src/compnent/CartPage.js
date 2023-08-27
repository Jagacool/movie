// CartPage.js
import React from 'react';
import { useDataContext } from './DataContext';

const CartPage = () => {
  const { cartItems, totalQuantity, totalAmount, increaseQuantity, decreaseQuantity } = useDataContext();

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
        </div>
      ))}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default CartPage;
