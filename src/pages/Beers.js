import BeersList from "../components/BeersList";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const API_ENDPOINT = "https://ih-beers-api2.herokuapp.com/beers";

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      const beersFromApi = await axios.get(`${API_ENDPOINT}/`);
      setBeers(beersFromApi.data);
    };
    getBeers();
  }, []);

  return <BeersList beers={beers} />;
}

export default Beers;
