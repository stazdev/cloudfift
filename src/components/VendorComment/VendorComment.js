import React from "react";
import { vendors } from "../../users";
import Tag from "../UserTag/Tag";

import "./VendorComment.css";

const VendorComment = () => {
  return (
    <div className="cards">
      {vendors.map((vendor) => (
        <div className="card">
          <img src={vendor.image} alt="" />
          <div className="username">{vendor.name}</div>
          <Tag vendor>{vendor.user_type}</Tag>
          <div className="comment">{vendor.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default VendorComment;
