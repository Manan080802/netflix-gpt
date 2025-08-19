import React from "react";
import useMovieTrailer from "../../hooks/useMoiveTrailer";

const VideoBackGround = (props) => {
  const { movieId } = { ...props };
  let trailer = useMovieTrailer(movieId);
  if (!trailer) return;
  return (
    <div className=" absolute top-0 left-0 w-full h-full object-cover -z-10">
      <iframe
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailer.key}&modestbranding=1&rel=0&iv_load_policy=3`}
        title="Movie Trailer"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
