import React from "react";
import "./Btn.css";

const Btn = (props) => {
  return <button className="button">{props.children}</button>;
};

export default Btn;
