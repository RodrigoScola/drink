import React from "react";
import profileImg from "../../../images/image.jfif";
import "./Profile.css";

export const Profile = () => {
  const days = 4;
  return (
    <div className="app">
      <header>
        <img src={profileImg} />
        <h3>Hannah Stockings</h3>
        <h5> liv laugh love</h5>
      </header>
      <ul>
        {/* streak */}
        <li>{days} days in the streak</li>
      </ul>
      <li>posts</li>
    </div>
  );
};
