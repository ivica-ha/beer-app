import React from "react";
import "../style.scss";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const Filters = ({
  beers,
  setFilteredBeers,
  rangeBeers,
  setRangeBeers,
  searchBeers,
  setSearchBeers,
}) => {
  const filterData = () => {
    let filterBeers = [];

    for (let i = 0; i < rangeBeers.length; i++) {
      for (let j = 0; j < searchBeers.length; j++) {
        if (rangeBeers[i] === searchBeers[j]) {
          filterBeers.push(rangeBeers[i]);
        }
      }
    }
    setFilteredBeers(filterBeers);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.value.toLowerCase();

    const filterBeers = beers.filter((beer) => {
      return beer.name.toLowerCase().search(inputValue) !== -1;
    });
    setSearchBeers(filterBeers);
    filterData();
  };

  const handleRange = (e) => {
    const firstPos = e[0];
    const secondPos = e[1];

    const filterBeers = beers.filter((beer) => {
      if (firstPos < beer.abv && beer.abv < secondPos) {
        return 1;
      } else {
        return 0;
      }
    });
    setRangeBeers(filterBeers);
    filterData();
  };

  return (
    <div className="filters">
      <div>
        <label>Search:</label>
        <input type="text" onChange={(e) => handleSearch(e)} />
      </div>
      <div>
        <label>Alcohol content(%):</label>
        <Range
          onAfterChange={(e) => handleRange(e)}
          allowCross={false}
          defaultValue={[0, 100]}
        />
      </div>
    </div>
  );
};

export default Filters;
