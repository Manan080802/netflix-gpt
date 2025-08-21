import React from "react";
import Header from "./navigation/Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./dashboard/MainContainer";
import SecondaryContainer from "./dashboard/SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRated from "../hooks/useTopRated";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovie();
  useTopRated();

  return (
    <div>
      <Header></Header>

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
