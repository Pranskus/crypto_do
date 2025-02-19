import React, { useState } from "react";
import "./Hero.css"; // Create a CSS file for the hero section styles
import Illustration from "../images/Illustration.png";
import CreateContractPage from "./CreateContractPage"; // Import the contract page

const Hero: React.FC = () => {
  const [showCreateContract, setShowCreateContract] = useState<boolean>(false);

  const handleCreateContract = (): void => {
    setShowCreateContract(true); // Show the contract page as a modal
  };

  const handleCloseContract = (): void => {
    setShowCreateContract(false); // Hide the contract page
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>CryptoDo</h1>
          <p>
            <strong className="gradient-underline">THE BEST</strong> crypto
            smart-contract to make a better future. Start building your smart
            contract with{" "}
            <strong className="gradient-underline">CRYPTODO.</strong>
          </p>
          <button onClick={handleCreateContract}>Create a Contract</button>
        </div>
        <div className="hero-graphic">
          <img src={Illustration} alt="Cryptodo Illustration" />
        </div>
      </section>

      {/* Conditionally render CreateContractPage as a modal */}
      <div
        className={`create-contract-modal ${showCreateContract ? "show" : ""}`}
      >
        <CreateContractPage onClose={handleCloseContract} />
      </div>
    </div>
  );
};

export default Hero;
