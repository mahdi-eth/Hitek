import React, { createContext, useContext, useState } from "react";

const productsContext = createContext({
  products: null,
  // eslint-disable-next-line no-unused-vars
  setProducts: (value) => {}
});

export const useProducts = () => useContext(productsContext);

// eslint-disable-next-line react/prop-types
export const Products = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = { products, setProducts };

  return (
    <productsContext.Provider value={value}> 
      {children}
    </productsContext.Provider>
  );
};
