import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptSearch: false,
  },
  reducers: {
    handleGptSearch: (state, action) => {
      state.isGptSearch = !state.isGptSearch;
    },
  },
});
export const { handleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
