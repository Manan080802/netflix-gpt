/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { API_OPTION, API_URL } from "../constants/config";
import { addNowMovies } from "../app/features/movies/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const disPatch = useDispatch();

  const getMovieData = async () => {
    const api_url = API_URL + "movie/now_playing";

    const data = await fetch(api_url, API_OPTION);
    const movieDetails = await data.json();
    disPatch(addNowMovies(movieDetails));
  };
  useEffect(() => {
    getMovieData();
  }, []);
};
export default useNowPlayingMovie;
