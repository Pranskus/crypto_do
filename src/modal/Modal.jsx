import React, { useEffect } from "react";
import "./Modal.css";
import erc_token from "../images/erc_token.png";
import erc_smart from "../images/erc_smart.png";

const Modal = ({ isOpen, onClose, children }) => {
  // Close the modal when 'Escape' key is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleEscape);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  // Handle clicking outside the modal content to close the modal
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? "show" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className={`modal-content ${isOpen ? "show" : ""}`}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>

        <h2 className="modal-title">CHOOSE WHAT TO CREATE</h2>

        <div className="modal-cards">
          {/* First Card */}
          <div className="modal-card">
            <div className="modal-card-icon">
              <img src={erc_token} alt="token" />
            </div>
          </div>

          {/* Second Card */}
          <div className="modal-card">
            <div className="modal-card-icon">
              <img src={erc_smart} alt="smart" />
            </div>
          </div>
        </div>

        <h2 className="modal-subtitle">ABOUT BLOCKCHAINS</h2>
        <p className="modal-description">
          <strong className="blue-text">CRYPTODO</strong> - is a smart contract
          constructor for tokens. Everyday practice shows that the constant
          information and propaganda support of our activities plays an
          important role in shaping the training system. The provision of our
          activities plays an important role in shaping.
        </p>
      </div>
    </div>
  );
};

export default Modal;
