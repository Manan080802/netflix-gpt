/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION, API_URL } from "../constants/config";
import { addPopularMovie } from "../app/features/movies/movieSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const disPatch = useDispatch();
  const popularMovieList = useSelector((state) => state.movie.popularMovie);

  const getMovieData = async () => {
    const api_url = API_URL + "movie/popular?region=IN";

    const data = await fetch(api_url, API_OPTION);
    const movieDetails = await data.json();
    disPatch(addPopularMovie(movieDetails));
  };
  useEffect(() => {
    !popularMovieList && getMovieData();
  }, []);
};
export default usePopularMovie;
