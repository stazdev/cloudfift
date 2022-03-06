import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a href={props.href} className="button">
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`button ${props.light && "button__light"}`}
      >
        {props.children}
      </Link>
    );
  }
};

export default Button;
