import React from "react";
import Button from "../Button/Button";
import subscribeImage from "../../images/subscribe-banner1.png";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <img src={subscribeImage} alt="banner" />
        <div className="footer__top-text">
          <h3>
            Be a member <br /> of our community 🎉
          </h3>
          <p>
            We’d make sure you’re always first to know what’s
            <br /> happening on Vasiti—thus, the world.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="enter your email address" />
            <Button to="#" light>
              subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="footer__bottom"></div>
    </div>
  );
};

export default Footer;
