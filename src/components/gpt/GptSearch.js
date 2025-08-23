import React from "react";

const GptSearch = () => {
  return (
    <div className="relative z-10 flex flex-col items-center px-4 text-center mt-24">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex w-full max-w-md sm:max-w-lg md:max-w-2xl"
      >
        {/* Input */}
        <input
          type="text"
          placeholder="Search movies, shows..."
          className="flex-1 px-4 py-2 sm:py-3 rounded-l-md text-sm sm:text-base md:text-lg outline-none border border-gray-300 focus:ring-2 focus:ring-red-500"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-r-md text-sm sm:text-base md:text-lg font-semibold transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
