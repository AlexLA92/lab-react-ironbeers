import React from "react";
import BeerListItem from "./BeerListItem";

function BeersList({ beers }) {
  return (
    <div>
      {beers.map((beer) => (
        <BeerListItem beer={beer} />
      ))}
    </div>
  );
}

export default BeersList;
