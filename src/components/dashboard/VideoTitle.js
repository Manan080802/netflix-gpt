import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="max-w-xl md:px-12">
      {/* Responsive title */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold drop-shadow-lg text-white">
        {title}
      </h2>

      {/* Overview hidden on small screens */}
      <p className="hidden sm:block mt-4 text-sm sm:text-base lg:text-lg text-gray-200 line-clamp-3">
        {overview}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {/* Play Button */}
        <button className="flex items-center gap-2 bg-red-600 text-white text-sm sm:text-lg rounded-md px-4 sm:px-6 md:px-8 py-2 font-semibold hover:bg-red-700 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>

        {/* More Info Button */}
        <button className="flex items-center gap-2 border border-red-600 text-red-600 text-sm sm:text-lg rounded-md px-4 sm:px-6 md:px-8 py-2 font-semibold hover:bg-red-600 hover:text-white transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
