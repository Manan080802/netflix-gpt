/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTION, API_URL } from "../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerDetail } from "../app/features/movies/movieSlice";

const useMovieTrailer = (movieId) => {
  const disPatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movie.trailerDetail);

  const getMovieVideo = async () => {
    const api_url = API_URL + "movie/" + movieId + "/videos";
    const data = await fetch(api_url, API_OPTION);
    const result = await data.json();

    const trailer = result.results?.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    disPatch(
      addTrailerDetail({
        movieId,
        trailer: trailer || result?.results?.[0] || null,
      })
    );
  };
  useEffect(() => {
    if (!trailerVideo || trailerVideo?.movieId !== movieId) getMovieVideo();
  }, []);
};
export default useMovieTrailer;
