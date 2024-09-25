import React from "react";
import "./Footer.css"; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} CryptoDo. All rights reserved.</p>
        <div className="footer-links"></div>
      </div>
    </footer>
  );
};

export default Footer;
