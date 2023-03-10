import React, { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
      const cartList = JSON.parse(localStorage.getItem('cart')) || []
    setCart(cartList)
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
