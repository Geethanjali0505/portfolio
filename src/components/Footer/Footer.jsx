import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <a className="footer__social-link" href="https://facebook.com">
            <FaFacebook size="30" />
          </a>
          <a className="footer__social-link" href="https://linkedin.com">
            <FaLinkedin size="30" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
