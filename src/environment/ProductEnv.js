import React, { createContext, useState, useEffect } from 'react';

export const ProductEnv = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json()
      setProducts(data);
    };
    fetchProducts();
  }, [])
  return (<ProductEnv.Provider value={{ products }}>{children}</ProductEnv.Provider>)
};

export default ProductProvider;
