import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovie);
  return (
    <div className="text-white bg-black">
      <MovieList title={"Now Playing"} movies={movies}></MovieList>
      <MovieList title={"Now Playing"} movies={movies}></MovieList>

      <MovieList title={"Now Playing"} movies={movies}></MovieList>

      <MovieList title={"Now Playing"} movies={movies}></MovieList>
    </div>
  );
};

export default SecondaryContainer;
