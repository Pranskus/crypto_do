import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import "./CreateContractPage.css";
import Binance from "../images/Binance.png";
import ETH from "../images/ETH.png";
import Tron from "../images/Tron.png";
import Polygon from "../images/Polygon.png";
import erc_token from "../images/erc_token.png";
import erc_smart from "../images/erc_smart.png";
import InfoDialog from "./InfoDialog";

interface CreateContractPageProps {
  onClose?: () => void;
}

const CreateContractPage: React.FC<CreateContractPageProps> = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");

  const handleOpenModal = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Opening modal...");
    event.stopPropagation();
    setIsModalOpen(true);
    event.currentTarget.blur();
  };

  const handleCloseModal = () => {
    console.log("Closing modal...");
    setIsModalOpen(false);
    (document.activeElement as HTMLElement)?.blur?.();
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  const handleCardClick = (type: "token" | "smart") => {
    setShowInfoDialog(true);
    setInfoMessage(
      type === "token"
        ? "Token creation process not available, please connect wallet"
        : "Smart contract creation process not available, please connect wallet"
    );
    setIsModalOpen(false);
  };

  const handleInfoDialogClose = () => {
    setShowInfoDialog(false);
    onClose?.();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="create-contract-page" onClick={handleOutsideClick}>
      <div className="content-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <main className="main-content">
          <div className="blockchain-options">
            <div
              className="blockchain-card"
              onClick={handleOpenModal}
              style={{ cursor: "pointer" }}
            >
              <div className="blockchain-icon">
                <img
                  src={Binance}
                  alt="Binance"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(
                      e as unknown as React.MouseEvent<HTMLDivElement>
                    );
                  }}
                />
              </div>
            </div>
            <div
              className="blockchain-card"
              onClick={handleOpenModal}
              style={{ cursor: "pointer" }}
            >
              <div className="blockchain-icon">
                <img
                  src={ETH}
                  alt="Ethereum"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(
                      e as unknown as React.MouseEvent<HTMLDivElement>
                    );
                  }}
                />
              </div>
            </div>
            <div
              className="blockchain-card"
              onClick={handleOpenModal}
              style={{ cursor: "pointer" }}
            >
              <div className="blockchain-icon">
                <img
                  src={Tron}
                  alt="Tron"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(
                      e as unknown as React.MouseEvent<HTMLDivElement>
                    );
                  }}
                />
              </div>
            </div>
            <div
              className="blockchain-card"
              onClick={handleOpenModal}
              style={{ cursor: "pointer" }}
            >
              <div className="blockchain-icon">
                <img
                  src={Polygon}
                  alt="Polygon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(
                      e as unknown as React.MouseEvent<HTMLDivElement>
                    );
                  }}
                />
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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="modal-title">CHOOSE WHAT TO CREATE</h2>

        <div className="modal-cards">
          <div className="modal-card" onClick={() => handleCardClick("token")}>
            <div className="modal-card-icon">
              <img src={erc_token} alt="token" />
            </div>
          </div>

          <div className="modal-card" onClick={() => handleCardClick("smart")}>
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
          important role in shaping the training system.
        </p>
      </Modal>

      <InfoDialog
        isOpen={showInfoDialog}
        message={infoMessage}
        onClose={handleInfoDialogClose}
        duration={3000}
      />
    </div>
  );
};

export default CreateContractPage;
