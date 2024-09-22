// context/GlobalContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [videoIsLoading, setVideoIsLoading] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        videoIsLoading,
        setVideoIsLoading,
        loggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
      throw new Error("useEvent must be used inside the EventContextProvider");
  }

  return context;
};
