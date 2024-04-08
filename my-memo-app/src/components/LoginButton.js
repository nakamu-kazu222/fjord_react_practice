import React from "react";
import { useAuth } from "../App";

const LoginButton = () => {
  const { isLoggedIn, toggleLogin } = useAuth();

  return (
    <button onClick={toggleLogin} className="login-button">
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
};

export default LoginButton;
