import React from "react";
import Tag from "../UserTag/Tag";

import customerImage from "../../images/Group 89.png";

import "./Customer.css";

const Customer = () => {
  return (
    <div className="customer">
      <img src={customerImage} alt="" className="customer__image" />
      <div className="customer__text">
        <h2>Tolu &amp; Joy’s Experience</h2>
        <Tag>customer</Tag>
        <p>
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
      </div>
    </div>
  );
};

export default Customer;
