import React, { createContext, useContext, useState } from "react";

const productIDContext = createContext({
  productId: null,
  // eslint-disable-next-line no-unused-vars
  setProductId: (value) => {}
});

export const useProductId = () => useContext(productIDContext);

// eslint-disable-next-line react/prop-types
export const ProductId = ({ children }) => {
  const [productId, setProductId] = useState([]);

  const value = { productId, setProductId };

  return (
    <productIDContext.Provider value={value}> 
      {children}
    </productIDContext.Provider>
  );
};
