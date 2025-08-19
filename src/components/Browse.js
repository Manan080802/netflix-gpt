import React from "react";
import Header from "./navigation/Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./dashboard/MainContainer";
import SecondaryContainer from "./dashboard/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header></Header>

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
