import React from "react";
import "./Login.css";

const Login = ({isLogin}) => {
  const some = (e) => !isLogin ? e.target.reset(): null
  return (
    <form
      className={`form__login ${isLogin ? 'log__active': null} `}
      onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
      }}
      some={(e) => some(e)}
    >
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form__input"
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="psw"
          required
          className="form__input"
        />
        <br />
        <button type="submit" className="form__input">
          Login
        </button>
      </div>
    </form>
  );
};

export { Login };
