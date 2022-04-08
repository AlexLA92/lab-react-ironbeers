import React from "react";
import { Link } from "react-router-dom";
import "./HomeSection.css";

function HomeSection({ image, title, description, target }) {
  return (
    <Link to={`${target}`} className="home-card">
      <div>
        <div
          className="home-image-container"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="home-content-container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default HomeSection;
