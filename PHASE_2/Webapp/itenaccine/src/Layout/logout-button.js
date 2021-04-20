import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      style={{marginBottom: "15px",width: "110px", padding: "10px"}}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out     .<i class="fas fa-sign-out-alt" /> 
    </button>
  );
};

export default LogoutButton;