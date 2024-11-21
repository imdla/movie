import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveMovieId: [],
};

const movieSaveSlice = createSlice({
  name: "movieSave",
  initialState,
  reducers: {
    saved: (state, action) => {
      state.saveMovieId.push(action.payload);
    },
    remove: (state, action) => {
      state.saveMovieId = state.saveMovieId.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { saved, remove } = movieSaveSlice.actions;
export default movieSaveSlice.reducer;
