import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import movieSaveReducer from "./slices/movieSaveSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movieSave: movieSaveReducer,
  },
});

export default store;
