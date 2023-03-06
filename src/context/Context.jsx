import React, { createContext, useEffect, useState } from "react";
import dataBase from "../assets/db/db";
export const allContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]); //dataBase inside ()
  // const cartList = JSON.parse(localStorage.getItem('Cart')) || []
  // const [cart, setCart] = useState(cartList);

  // useEffect(() => {
  //   const cartString = JSON.stringify(cart)
  //   localStorage.setItem('Cart', cartString)
  // }, [cart])

  return (
    <allContext.Provider
      value={{
        products,
        setProducts,
        // cart,
        // setCart
      }}
    >
      {children}
    </allContext.Provider>
  );
};

export default ContextProvider;
