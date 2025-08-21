import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    trailerDetail: null,
    popularMovie: null,
    topRatedMovie: null,
  },
  reducers: {
    addNowMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailerDetail: (state, action) => {
      state.trailerDetail = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
  },
});

export const {
  addNowMovies,
  addTrailerDetail,
  addPopularMovie,
  addTopRatedMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
