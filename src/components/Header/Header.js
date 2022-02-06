import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/Vasiti-Logo-black-1.png";
import Button from "../Button/Button";
import Bottom from "../Header/BottomNav/Bottom";

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="vasiti logo" className="logo" />
        <nav>
          <ul className="list">
            <li className="list__item">
              <Link to="#">About Us</Link>
            </li>
            <li className="list__item">
              <Link to="#">Stories</Link>
            </li>
            <li className="list__item">
              <Link to="#">Contact</Link>
            </li>
            <li className="list__item">
              <Link to="#">Log In</Link>
            </li>
          </ul>
          <Button to="#" className="nav-btn">
            sign up
          </Button>
        </nav>
      </header>
      <Bottom />
    </>
  );
};

export default Header;
