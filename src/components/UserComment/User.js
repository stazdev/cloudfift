import React from "react";

import users from "../../users";
import Tag from "../UserTag/Tag";
import "./User.css";

const User = () => {
  return (
    <div className="cards">
      {users.map((user) => (
        <div className="card">
          <img src={user.image} alt="" />
          <div className="username">{user.name}</div>
          <div className="location">
            <span>in {user.city}</span>
            <Tag customer-tag>{user.user_type}</Tag>
          </div>
          <div className="comment">{user.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default User;
