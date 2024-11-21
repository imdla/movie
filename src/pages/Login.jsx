import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/slices/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", password: "" });
  const { isLoggedIn, authName, authPw } = useSelector((state) => state.auth);

  function handleChange(e) {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, password } = formData;

    if (isLoggedIn) {
      dispatch(logout());
    } else {
      if (authName === name && authPw === password) {
        dispatch(login());
        navigate("/");
      } else {
        alert("아이디나 비밀번호가 올바르지 않습니다.");
      }
    }
  }

  return (
    <div className="container">
      <h2>Login Page</h2>

      <form className="flex-center flex-col" action="" onSubmit={handleSubmit}>
        <div className="marginBttom">
          <label htmlFor="name">USER NAME </label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>

        <div className="marginBttom">
          <label htmlFor="password">PASSWORD </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <button
          style={{
            backgroundColor: isLoggedIn ? "#888" : "#f82f62",
          }}
        >
          {isLoggedIn ? "로그아웃" : "로그인"}
        </button>
      </form>
    </div>
  );
}
