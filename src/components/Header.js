import React from "react";

import "./Header.css";
import logo from "../images/Vasiti-Logo-black-1.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="vasiti logo" className="logo" />
      <nav className="navigation">
        <ul className="list">
          <li className="list__item">about us</li>
          <li className="list__item">stories</li>
          <li className="list__item">contact us</li>
          <li className="list__item">log in</li>
        </ul>
        <button className="btn">sign up</button>
      </nav>
    </header>
  );
};

export default Header;
