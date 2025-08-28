import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";
import movieSlice from "./features/movies/movieSlice";
import gptSlice from "./features/gpt/gptSlice";
import configSlice from "./features/configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: gptSlice,
    config: configSlice,
  },
});
export default appStore;
