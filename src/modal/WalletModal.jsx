import React from "react";
import { BrowserProvider } from "ethers"; // Import BrowserProvider for ethers.js v6
import "./WalletModal.css"; // Assuming you have a CSS file for modal styling

const WalletModal = ({ isOpen, onClose, onConnect }) => {
  // Handle wallet connection using MetaMask
  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        // Create a provider and request the user's account
        const provider = new BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);

        // Get the signer and address
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        // Pass the address back to the parent component
        onConnect(address);

        // Close the modal
        onClose();
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert(
        "MetaMask is not installed. Please install MetaMask and try again."
      );
    }
  };

  // Prevent rendering the modal if not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Connect Your Wallet</h2>
        <button onClick={handleConnectWallet} className="connect-button">
          Connect with MetaMask
        </button>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default WalletModal;
