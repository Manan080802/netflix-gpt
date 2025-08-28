/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION, API_URL } from "../constants/config";
import { addTopRatedMovie } from "../app/features/movies/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const disPatch = useDispatch();
  const topRatedMovie = useSelector((state) => state.movie.topRatedMovie);

  const getMovieData = async () => {
    const api_url = API_URL + "movie/top_rated?region=IN";

    const data = await fetch(api_url, API_OPTION);
    const movieDetails = await data.json();
    disPatch(addTopRatedMovie(movieDetails));
  };
  useEffect(() => {
    !topRatedMovie && getMovieData();
  }, []);
};
export default useTopRated;
