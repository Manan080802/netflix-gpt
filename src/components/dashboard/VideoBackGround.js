import React from "react";
import useMovieTrailer from "../../hooks/useMoiveTrailer";
import { useSelector } from "react-redux";

const VideoBackGround = ({ movieId }) => {
  const trailer = useSelector((state) => state.movie.trailerDetail);
  useMovieTrailer(movieId);

  const videoKey = trailer?.key || trailer?.trailer?.key;
  if (!videoKey) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}&modestbranding=1&rel=0`}
        title="Movie Trailer"
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackGround;
