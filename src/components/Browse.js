import React from "react";
import Header from "./navigation/Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./dashboard/MainContainer";
import SecondaryContainer from "./dashboard/SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovie();

  return (
    <div>
      <Header></Header>

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
