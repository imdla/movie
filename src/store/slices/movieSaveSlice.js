import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveMovieId: ["912649"],
};

const movieSaveSlice = createSlice({
  name: "movieSave",
  initialState,
  reducers: {
    saved: (state, action) => {
      state.saveMovieId.push(action.payload);
    },
    notSaved: (state, action) => {
      state.saveMovieId.pop(action.payload);
    },
  },
});

export const { saved, notSaved } = movieSaveSlice.actions;
export default movieSaveSlice.reducer;
