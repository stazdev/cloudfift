import React from "react";
import Tag from "../UserTag/Tag";
import vendorImage from "../../images/woman-shoppingbag-card 1.png";

import "./Vendor.css";

const Vendor = () => {
  return (
    <div className="vendor">
      <div className="vendor__text">
        <h2>Josiah's Experience</h2>
        <Tag fvendor>vendor</Tag>
        <p>
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
      </div>
      <img src={vendorImage} alt="" className="vendor__image" />
    </div>
  );
};

export default Vendor;
