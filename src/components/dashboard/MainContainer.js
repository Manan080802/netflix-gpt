import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const moviesList = useSelector((state) => state.movie.nowPlayingMovie);
  if (!moviesList) return;
  const randomMovie = Math.floor(Math.random() * 20);
  const mainMovie = moviesList?.results?.[randomMovie];
  console.log("mainMovie", mainMovie);
  return (
    <div className="relative w-full h-screen  ">
      <VideoBackGround movieId={mainMovie?.id}></VideoBackGround>
      {/* Gradient overlay for readability */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black"></div> */}

      {/* Title & Buttons overlay */}
      <div className="absolute bottom-32 left-10 z-10">
        <VideoTitle
          title={(mainMovie?.original_title ?? mainMovie?.title) || ""}
          overview={mainMovie?.overview || ""}
        />
      </div>
    </div>
  );
};

export default MainContainer;
