import React from "react";
import { BACKgROUND_IMG_URL } from "../../constants/config";
import GptSearch from "./GptSearch";
import GptMovie from "./GptMovie";

const GptBody = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BACKgROUND_IMG_URL}
          alt="background"
          className="h-full w-full object-cover"
        />

        {/* Dark gradient overlay (top-to-bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Search Bar */}
        <GptSearch />

        {/* Extra Content */}
        <GptMovie />
      </div>
    </div>
  );
};

export default GptBody;
