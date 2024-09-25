import React from "react";
import "./About.css"; // Ensure this file exists and is updated for styling
import AboutImg from "../images/about.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-image">
          {/* Replace the src with the path to your image */}
          <img src={AboutImg} alt="About Company" />
          <div className="about-button-container">
            <button>Try for free</button>
          </div>
        </div>

        <div className="about-text">
          <h1>ABOUT COMPANY</h1>
          <p>
            Everyday practice shows that the constant information and
            propagation support of our activities plays an important role in
            shaping the personal trading system and meets urgent needs.
          </p>
          <p>
            At CryptoDo, our team of blockchain experts is dedicated to building
            innovative solutions tailored to meet the dynamic needs of the
            crypto market. We believe in the power of smart contracts to
            revolutionize financial operations, ensuring transparency, security,
            and efficiency.{" "}
          </p>
          <div class="centered-bold-text">
            <b>
              <strong className="blue-text">SMART CONTRACT</strong> - is
              decentralized blockchain application
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
