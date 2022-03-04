import React from "react";
import "./Tag.css";

function Tag(props) {
  return (
    <div
      className={`tag ${props.vendor && "vendor__tag"} ${
        props.customer && "customer__tag"
      } ${props.fvendor && "featured-vendor__tag"} `}
    >
      {props.children}
    </div>
  );
}

export default Tag;
