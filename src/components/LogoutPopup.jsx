import React from "react";
import { logout } from "../components/Authentication/utilities";
import { useNavigate } from "react-router-dom";

export const LogoutPopup = ({ initials, user }) => {
  const navigate = useNavigate();
  const logoutAndRedirect = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="logout__popup">
      <div className="logout__popup__header">
        <div className="username">
          <div className="username__name">{initials}</div>
        </div>
        <div className="full__user">
          <p>
            <strong>{user.displayName}</strong>
          </p>
          <span>{user.email}</span>
        </div>
      </div>
      <div
        className="logout__popup__footer"
        onClick={() => logoutAndRedirect()}
      >
        logout
      </div>
    </div>
  );
};
