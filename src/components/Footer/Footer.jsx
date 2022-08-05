import React from "react";

import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur footer-b--1"></div>
      <div className="blur footer-b--2"></div>
    </div>
  );
}

export default Footer;
