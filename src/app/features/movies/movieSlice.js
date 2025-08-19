import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
  },
  reducers: {
    addNowMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
  },
});

export const { addNowMovies } = movieSlice.actions;
export default movieSlice.reducer;
