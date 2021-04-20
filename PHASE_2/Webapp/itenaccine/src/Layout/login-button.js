import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
      style={{marginBottom: "15px",width: "110px", padding: "10px"}}
    >
      Log In     .<i class="far fa-user" />
    </button>
  );
};

export default LoginButton;