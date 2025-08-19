import React, { useEffect } from "react";
import Header from "./navigation/Header";
import { API_OPTION, API_URL } from "../constants/config";

const Browse = () => {
  const getMovieData = async () => {
    const api_url = API_URL + "movie/now_playing";

    const data = await fetch(api_url, API_OPTION);
    const movieDetails = await data.json();
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Browse;
