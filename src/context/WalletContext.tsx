// src/context/WalletContext.jsx
import React, { createContext, useContext, useState } from "react";

interface WalletContextType {
  isConnected: boolean;
  toggleConnection: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isConnected, setIsConnected] = useState(false);

  const toggleConnection = () => {
    setIsConnected((prev) => !prev);
  };

  return (
    <WalletContext.Provider value={{ isConnected, toggleConnection }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
