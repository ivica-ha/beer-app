import React from "react";
import { useState } from "react";

const Beers = ({ filteredBeers }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="beers">
      {filteredBeers.map((beer) => {
        const name = beer.name;
        const image = beer.image_url;
        const details = beer.details;
        return (
          <div key={beer.id} className="box">
            <img src={image} className="box-img" />

            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
