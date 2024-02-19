// ApiContext.js


import React, { createContext, useContext, useState, useEffect } from "react";


const ApiContexts = createContext();

export const ApiProvider = ({ children }) => {
  
  return (
    <ApiContexts.Provider value={{}}>
      {children}
    </ApiContexts.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContexts);

  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }

  return context;
};
