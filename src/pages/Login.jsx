import React from "react";

export default function Login() {
  return (
    <>
      <h2>Login Page</h2>
      <form action="">
        <label htmlFor="name">USER NAME : </label>
        <input type="text" id="name" name="name" />

        <label htmlFor="password">PASSWORD : </label>
        <input type="password" id="password" name="password" />

        <button>로그인</button>
      </form>
    </>
  );
}
