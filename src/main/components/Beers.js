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
        const {name, details, image_url, abv} = beer
        return (
          <div key={beer.id} className="box">
            <img src={image_url} alt={name} className="box-img" />
            <div>{name}</div>
            <div>{abv}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
