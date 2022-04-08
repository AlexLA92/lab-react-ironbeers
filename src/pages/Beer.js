import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import BeerDetails from "../components/BeerDetails";
const API_ENDPOINT = "https://ih-beers-api2.herokuapp.com/beers";

function Beer() {
  const { id } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const getBeer = async () => {
      const beersFromApi = await axios.get(`${API_ENDPOINT}/${id}`);
      setBeer(beersFromApi.data);
    };
    getBeer();
  }, [id]);

  return <BeerDetails beer={beer} />;
}

export default Beer;
