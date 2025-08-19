import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";
import movieSlice from "./features/movies/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
  },
});
export default appStore;
