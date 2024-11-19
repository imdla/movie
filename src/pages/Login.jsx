import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", password: "" });
  const { isLoggedIn, authName, authPw } = useSelector((state) => state.auth);

  // function handleClick() {
  //   isLoggedIn ? dispatch(logout()) : dispatch(login());
  // }

  function handleChange(e) {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, password } = formData;

    if (isLoggedIn) dispatch(logout());

    if (!isLoggedIn && authName === name && authPw === password) {
      dispatch(login());
    }
  }

  return (
    <>
      <h2>Login Page</h2>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">USER NAME : </label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="password">PASSWORD : </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />

        <button
          style={{
            backgroundColor: isLoggedIn ? "gray" : "blue",
          }}
        >
          {isLoggedIn ? "로그아웃" : "로그인"}
        </button>
      </form>
    </>
  );
}
