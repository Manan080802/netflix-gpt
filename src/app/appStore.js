import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";
import movieSlice from "./features/movies/movieSlice";
import gptSlice from "./features/gpt/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: gptSlice,
  },
});
export default appStore;
