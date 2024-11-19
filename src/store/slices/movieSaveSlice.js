import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    isSaved: false,
    movieId: "",
  },
];

const movieSaveSlice = createSlice({
  name: "movieSave",
  initialState,
  reducers: {
    saved: (state, actions) => {
      state.isSaved = true;
    },
    notSaved: (state, actions) => {
      state.isSaved = false;
    },
  },
});

export const { saved, notSaved } = movieSaveSlice.actions;
export default movieSaveSlice.reducer;
