import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="text-white bg-black">
      <MovieList
        title={"Now Playing"}
        movies={movies?.nowPlayingMovie}
      ></MovieList>
      <MovieList title={"Popular"} movies={movies?.popularMovie}></MovieList>

      <MovieList title={"Top Rated"} movies={movies?.topRatedMovie}></MovieList>
    </div>
  );
};

export default SecondaryContainer;
