import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "영화 1",
    content: "내용 1",
  },
  {
    id: 2,
    title: "영화 2",
    content: "내용 2",
  },
  {
    id: 3,
    title: "영화 3",
    content: "내용 3",
  },
];

const postsSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
