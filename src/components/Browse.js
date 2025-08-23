import React from "react";
import Header from "./navigation/Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./dashboard/MainContainer";
import SecondaryContainer from "./dashboard/SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRated from "../hooks/useTopRated";
import { useSelector } from "react-redux";

const Browse = () => {
  const isGptSearch = useSelector((state) => state.gpt.isGptSearch);
  useNowPlayingMovie();
  usePopularMovie();
  useTopRated();

  return (
    <div>
      <Header></Header>
      {isGptSearch ? (
        <h1>gpt search</h1>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
