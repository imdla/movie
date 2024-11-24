import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    isLoggedIn: JSON.parse(localStorage.getItem("user")) || false,
    userName: "홍길동",
    userPassword: 123,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.user = {
        isLoggedIn: false,
        userName: "홍길동",
        userPassword: "123",
      };
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
