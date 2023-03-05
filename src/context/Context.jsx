import React, { createContext, useState } from "react";
export const allContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <allContext.Provider value={{ products, setProducts }}>
      {children}
    </allContext.Provider>
  );
};

export default Context;
