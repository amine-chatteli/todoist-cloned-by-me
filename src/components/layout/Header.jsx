import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { useQuickAddTaskValue } from "../../context";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import { LogoutPopup } from "../LogoutPopup";

export const Header = () => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const { showQuickAddTask, setShowQuickAddTask } = useQuickAddTaskValue();
  const [user, loading] = useAuthState(firebase.auth());
  console.log(user);
  const initials = user && user.displayName&&user.displayName.match(/\b(\w)/g).join("");

  return (
    <>
      <div className="header" data-testid="header">
        <nav>
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <ul className="options">
            <li>
              <button
                className="options__add"
                type="button"
                onClick={() => setShowQuickAddTask(!showQuickAddTask)}
              >
                +
              </button>
            </li>
            <li>
              <button className="options__dark__mode" type="button">
                <FaPizzaSlice />
              </button>
            </li>
            <li className="username" onClick={()=>setShowLogoutPopup(!showLogoutPopup)}>
              <div className="username__name">{initials}</div>
            </li>
          </ul>
        </nav>
        {showLogoutPopup && <LogoutPopup initials={initials} user={user} />}
      </div>
    </>
  );
};
