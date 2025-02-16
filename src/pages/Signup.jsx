import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../css/Signup.module.css";

export default function Signup() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });
  const [isSame, setIsSame] = useState("비밀번호를 입력해주세요.");
  const { isLoggedIn, userName, userPassword } = useSelector(
    (state) => state.auth.user
  );

  useEffect(() => {
    const { password, passwordCheck } = formData;

    if (password === "" || passwordCheck === "") {
      setIsSame("비밀번호를 입력해주세요.");
    } else if (password === passwordCheck) {
      setIsSame("비밀번호가 일치합니다.");
    } else {
      setIsSame("비밀번호가 일치하지 않습니다.");
    }
  }, [formData]);

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
    <div id="signup" className="container">
      <h2>회원가입</h2>

      <form className="flex-center flex-col" action="" onSubmit={handleSubmit}>
        <div className="marginBttom flex-center">
          <label htmlFor="name">USER NAME </label>
          <input
            type="text"
            id="name"
            name="name"
            required
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
            required
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
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex-center">
          <label htmlFor="password">PASSWORD CHECK</label>
          <input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            required
            value={formData.passwordCheck}
            onChange={handleChange}
          />
        </div>
        <p id="feedback">{isSame}</p>

        <button>회원가입</button>
      </form>
    </div>
  );
}
