import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    trailerDetail: null,
  },
  reducers: {
    addNowMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailerDetail: (state, action) => {
      state.trailerDetail = action.payload;
    },
  },
});

export const { addNowMovies, addTrailerDetail } = movieSlice.actions;
export default movieSlice.reducer;
