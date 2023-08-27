import React, { useContext } from 'react';
import { DataContext } from './contextData';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(DataContext);

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
