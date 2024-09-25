// src/context/WalletContext.jsx
import React, { createContext, useState, useContext } from "react";

// Create the context
const WalletContext = createContext();

// Create a provider component
export const WalletProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false); // Global state for wallet connection
  const [walletAddress, setWalletAddress] = useState(""); // Optional: Store wallet address if needed

  const toggleConnection = () => {
    setIsConnected((prevState) => !prevState);
  };

  return (
    <WalletContext.Provider
      value={{ isConnected, toggleConnection, walletAddress, setWalletAddress }}
    >
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook to use the wallet context
export const useWallet = () => {
  return useContext(WalletContext);
};
