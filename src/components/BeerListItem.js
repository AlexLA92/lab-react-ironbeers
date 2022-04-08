import React from "react";
import { Link } from "react-router-dom";
import "./BeerListItem.css";

function BeerListItem({ beer }) {
  console.log(beer);
  return (
    <div className="beer-li">
      <div className="beer-l-img-container">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="beer-l-info-container">
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>
          <Link to={`/beers/${beer._id}`}>See details</Link>
        </p>
      </div>
    </div>
  );
}

export default BeerListItem;
