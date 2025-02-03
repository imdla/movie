import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Signup() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", password: "" });
  const { isLoggedIn, userName, userPassword } = useSelector(
    (state) => state.auth.user
  );

  function handleChange(e) {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, password } = formData;

    if (isLoggedIn) {
      dispatch(logout());
    } else {
      if (userName == name && userPassword == password) {
        const loginData = {
          isLoggedIn: true,
          userName: name,
          userPassword: password,
          movieList: [],
        };
        dispatch(login(loginData));
        setFormData({ name: "", password: "" });
        navigate("/");
      } else {
        alert("아이디나 비밀번호가 올바르지 않습니다.");
      }
    }
  }

  return (
    <div className="container">
      <h2>Signup Page</h2>

      <form className="flex-center flex-col" action="" onSubmit={handleSubmit}>
        <div className="marginBttom flex-center">
          <label htmlFor="name">USER NAME </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="marginBttom flex-center">
          <label htmlFor="name">EMAIL </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="marginBttom flex-center">
          <label htmlFor="password">PASSWORD </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="marginBttom flex-center">
          <label htmlFor="password">PASSWORD CHECK</label>
          <input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            value={formData.passwordCheck}
            onChange={handleChange}
          />
        </div>

        <button>회원가입</button>
      </form>
    </div>
  );
}
