/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { API_OPTION, API_URL } from "../constants/config";

const useMovieTrailer = (movieId) => {
  const [movieVideo, setMovieVideo] = useState(movieId);
  const getMovieVideo = async () => {
    const api_url = API_URL + "movie/" + movieId + "/videos";
    const data = await fetch(api_url, API_OPTION);
    const result = await data.json();

    const trailer = result.results?.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    setMovieVideo(trailer || result.results?.[0] || null);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);

  return movieVideo;
};
export default useMovieTrailer;
