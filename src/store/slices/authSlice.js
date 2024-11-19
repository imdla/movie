import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    isLoggedIn: false,
    name: "홍길동",
    password: "123",
  },
];

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.isLoggedIn = true;
    },
    logout: (state, actions) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions
export default authSlice.reducer;
