import React, { useState, useEffect } from "react";
import { useWallet } from "../context/WalletContext";
import Logo from "../images/Logo.png";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";

interface WalletContextType {
  isConnected: boolean;
  toggleConnection: () => void;
}

const Header: React.FC = () => {
  const { isConnected, toggleConnection } = useWallet() as WalletContextType;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
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

  const handleMenuToggle = (): void => {
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

        <button className="hamburger-menu" onClick={handleMenuToggle}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </button>

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

          <button
            className={`wallet-button ${isConnected ? "connected" : ""}`}
            onClick={toggleConnection}
          >
            {isConnected ? "Connected" : "Connect Wallet"}
          </button>
        </nav>

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
