import React from "react";
import Header from "./navigation/Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Browse;
