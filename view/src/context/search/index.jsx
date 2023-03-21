import React, { createContext, useContext, useState } from "react";

const searchContext = createContext({
  search: null,
  // eslint-disable-next-line no-unused-vars
  setSearch: (value) => {}
});

export const useSearch = () => useContext(searchContext);

// eslint-disable-next-line react/prop-types
export const Search = ({ children }) => {
  const [search, setSearch] = useState([]);

  const value = { search, setSearch };

  return (
    <searchContext.Provider value={value}> 
      {children}
    </searchContext.Provider>
  );
};
