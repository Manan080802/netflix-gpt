import React from "react";
import Header from "./navigation/Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./dashboard/MainContainer";
import SecondaryContainer from "./dashboard/SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRated from "../hooks/useTopRated";
import { useSelector } from "react-redux";
import GptBody from "./gpt/GptBody";

const Browse = () => {
  const isGptSearch = useSelector((state) => state.gpt.isGptSearch);
  useNowPlayingMovie();
  usePopularMovie();
  useTopRated();

  return (
    <div>
      <Header></Header>
      {isGptSearch ? (
        <GptBody></GptBody>
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
