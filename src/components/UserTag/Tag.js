import React from "react";
import "./Tag.css";

function Tag(props) {
  return <div className="tag">{props.children}</div>;
}

export default Tag;
