import React from "react";

export default function Signup() {
  return (
    <div className="container">
      <h2>Login Page</h2>

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

        <button>회원가입</button>
      </form>
    </div>
  );
}
