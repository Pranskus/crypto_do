import React from "react";
import { useNavigate } from "react-router-dom";
import "./HowItWorks.css";

interface Step {
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const navigate = useNavigate();

  const steps: Step[] = [
    {
      title: "Create the Smart Contract",
      description:
        "The process starts by defining the rules and conditions in the smart contract code. These rules are written using a blockchain-supported programming language, such as Solidity, and deployed on the blockchain network.",
    },
    {
      title: "Deploy on the Blockchain",
      description:
        "Once the smart contract code is finalized, it is deployed to a blockchain, such as Ethereum. Deployment makes the contract immutable and publicly accessible, ensuring transparency and trust.",
    },
    {
      title: "Trigger Contract Execution",
      description:
        "The smart contract is automatically triggered when certain conditions are met. This could be a specific date, a payment received, or an external input like a sensor reading, ensuring seamless automation.",
    },
    {
      title: "Verify and Validate Data",
      description:
        "During execution, the contract interacts with real-time data (from oracles or other sources) to verify the conditions. This data validation process ensures the contract acts only on accurate and relevant information.",
    },
    {
      title: "Automatic Execution of Terms",
      description:
        "Once conditions are validated, the smart contract autonomously executes the predefined actions. This could involve transferring funds, updating records, or triggering another smart contract, all without human intervention.",
    },
    {
      title: "Store Results on the Blockchain",
      description:
        "After execution, the outcome is recorded on the blockchain, providing a secure, tamper-proof record. This final step ensures that all transactions and actions remain transparent, verifiable, and immutable.",
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-header">
        <h2>
          HOW IT <strong>WORKS</strong>
        </h2>
      </div>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-circle">
              <div className="spinner"></div>
              <span className="step-number">{index + 1}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
