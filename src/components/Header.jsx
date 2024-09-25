// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { useWallet } from "../context/WalletContext"; // Import the custom hook
import Logo from "../images/Logo.png";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const { isConnected, toggleConnection } = useWallet(); // Use context to get connection state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <div className="logo">
          <ScrollLink to="top" smooth={true} duration={500}>
            <img src={Logo} alt="Logo" />
          </ScrollLink>
        </div>

        {/* Hamburger Menu Icon */}
        <button className="hamburger-menu" onClick={handleMenuToggle}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <ScrollLink to="about" smooth={true} duration={500}>
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="how-it-works" smooth={true} duration={500}>
                HOW IT WORKS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="crypto-list" smooth={true} duration={500}>
                LIVE PRICES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="tokenomics" smooth={true} duration={500}>
                TOKENOMICS
              </ScrollLink>
            </li>
          </ul>

          {/* Wallet Button Inside Mobile Menu */}
          <button
            className={`wallet-button ${isConnected ? "connected" : ""}`}
            onClick={toggleConnection}
          >
            {isConnected ? "Connected" : "Connect Wallet"}
          </button>
        </nav>

        {/* Wallet Button for Desktop View */}
        <div className="wallet-container">
          <button
            className={`wallet-button ${isConnected ? "connected" : ""}`}
            onClick={toggleConnection}
          >
            {isConnected ? "Connected" : "Connect Wallet"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
