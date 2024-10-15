import React from "react";
import "./Tokenomics.css"; // Ensure this file exists and is updated for styling
import Toke from "../images/Toke.png";
import Toke_phone from "../images/Toke_phone.png";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="tokenomics">
      <h2>TOKENOMICS</h2>
      <div className="distribution">
        <div className="text-content">
          <h3>DISTRIBUTION OF TOKENS</h3>
          <p>
            The <strong className="blue-text">CRYPTODO</strong> company has its
            own
            <strong className="blue-text"> CDO</strong>.
          </p>
          <p>
            It is accepted as a payment for the service, and also distributes
            the company's profits among the leaders. All tokens accepted as
            payment are burned and withdrawn from circulation.
          </p>
        </div>
        <div className="toke">
          <img src={Toke} alt="Toke" />
        </div>
        <div className="phone">
          <img src={Toke_phone} alt="Toke_phone" />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
