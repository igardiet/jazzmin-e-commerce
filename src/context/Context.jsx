import React, { createContext, useEffect, useState } from "react";
import dataBase from "../assets/db/db";
export const allContext = createContext();

const ContextProvider = ({ children }) => {
  
  const cartList = JSON.parse(localStorage.getItem('Cart')) || []
  const [products, setProducts] = useState(cartList);

  useEffect(() => {
    const cartString = JSON.stringify(products)
    console.log(products)
    localStorage.setItem('Cart', cartString)
  }, [products])

  return (
    <allContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </allContext.Provider>
  );
};

export default ContextProvider;
