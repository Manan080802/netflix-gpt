import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies", movies);
  const scrollRef = useRef(null);

  // Scroll handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-6">
      <h2 className="text-xl font-bold mb-3 py-2">{title}</h2>

      <div className="flex items-center">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="px-2 text-2xl text-gray-500 hover:text-white"
        >
          {/* Left Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        {/* Movie Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth mx-4"
        >
          {movies?.results?.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="px-2 text-2xl text-gray-500 hover:text-white"
        >
          {/* Right Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5L15.75 12l-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
