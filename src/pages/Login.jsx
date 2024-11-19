import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  function handleClick() {
    isLoggedIn ? console.log(isLoggedIn) : console.log(isLoggedIn);
  }

  return (
    <>
      <h2>Login Page</h2>
      <form action="">
        <label htmlFor="name">USER NAME : </label>
        <input type="text" id="name" name="name" />

        <label htmlFor="password">PASSWORD : </label>
        <input type="password" id="password" name="password" />

        <button onClick={() => console.log(isLoggedIn)}>
          {/* {isLoggedIn ? "로그인" : "로그아웃"} */}
          로그인
        </button>
      </form>
    </>
  );
}
