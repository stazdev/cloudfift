import React from "react";
import Btn from "../UserButton/Btn";
import "./Customer.css";

const Customer = () => {
  return (
    <div className="customer">
      <img src="" alt="" className="customer__image" />
      <div className="customer__text">
        <h2>Tolu &amp; Joy’s Experience</h2>
        <Btn className="btn">customer</Btn>
      </div>
    </div>
  );
};

export default Customer;
