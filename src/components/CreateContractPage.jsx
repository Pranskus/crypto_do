import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import "./CreateContractPage.css";
import Binance from "../images/Binance.png";
import ETH from "../images/ETH.png";
import Tron from "../images/Tron.png";
import Polygon from "../images/Polygon.png";

const CreateContractPage = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (event) => {
    setIsModalOpen(true);
    event.currentTarget.blur(); // Ensure button loses focus
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.activeElement.blur(); // Ensure no element is focused when modal is closed
  };

  // Add event listener to close modal on "Escape" key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleCloseModal(); // Close the modal when "Escape" is pressed
        onClose(); // Call the parent close function
      }
    };

    window.addEventListener("keydown", handleEscape);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="create-contract-page">
      <div className="content-wrapper">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <main className="main-content">
          <div className="blockchain-options">
            <div className="blockchain-card">
              <div className="blockchain-icon">
                <button onClick={handleOpenModal} className="blockchain-button">
                  <img src={Binance} alt="Binance" />
                </button>
              </div>
            </div>
            <div className="blockchain-card">
              <div className="blockchain-icon">
                <button onClick={handleOpenModal} className="blockchain-button">
                  <img src={ETH} alt="Ethereum" />
                </button>
              </div>
            </div>
            <div className="blockchain-card">
              <div className="blockchain-icon">
                <button onClick={handleOpenModal} className="blockchain-button">
                  <img src={Tron} alt="Tron" />
                </button>
              </div>
            </div>
            <div className="blockchain-card">
              <div className="blockchain-icon">
                <button onClick={handleOpenModal} className="blockchain-button">
                  <img src={Polygon} alt="Polygon" />
                </button>
              </div>
            </div>
          </div>

          <aside className="blockchain-info">
            <h2>CHOOSE A BLOCKCHAIN</h2>
            <h3>
              <strong className="blue-text">CRYPTODO</strong> - is a smart
              contract constructor for tokens.
            </h3>
            <p>
              Everyday practice shows that constant outreach to our activities
              plays an important role in shaping the learning system, ensuring
              our activities play an important role in shaping.
            </p>
          </aside>
        </main>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CreateContractPage;
