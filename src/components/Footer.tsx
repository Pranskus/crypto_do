import React from "react";
import "./Footer.css"; 

const Footer: React.FC = () => {
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