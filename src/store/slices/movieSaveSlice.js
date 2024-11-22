import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  saveMovieId: [],
};

const movieSaveSlice = createSlice({
  name: "movieSave",
  initialState,
  reducers: {
    saved: (state, action) => {
      state.saveMovieId.push(action.payload);
      state.saveMovieId = _.uniq(state.saveMovieId);
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
