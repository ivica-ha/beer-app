import React from "react";
import Beers from "./components/Beers";
import "./style.scss";
import { useState, useEffect } from "react";
import Filters from "./components/Filters";

const Main = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [rangeBeers, setRangeBeers] = useState([]);
  const [searchBeers, setSearchBeers] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => {
        setSearchBeers(data);
        setRangeBeers(data);
        setFilteredBeers(data);
        setBeers(data);
      });
  }, []);

  return (
    <div className="main">
      <div className="cont">
        <div className="header">
          <div className="logo"></div>
        </div>
        <Filters
          beers={beers}
          setFilteredBeers={setFilteredBeers}
          rangeBeers={rangeBeers}
          setRangeBeers={setRangeBeers}
          searchBeers={searchBeers}
          setSearchBeers={setSearchBeers}
        />
        <Beers filteredBeers={filteredBeers} />
        <div className="footer">
          <div className="logo-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
