import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";

import {
  signInWithGoogleProvider,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  provider,
} from "./utilities";
import "./LoginRegister.css";

export const LoginRegisterForm = ({ LoginOrRegister }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const [user, loading] = useAuthState(firebase.auth());
  useEffect(() => {
    if (user) navigate("/todoist");
  }, [user, loading]);

  const LoginOrRegisterFunc = (e, email, password) => {
    e.preventDefault();
    LoginOrRegister === "register"
      ? registerWithEmailAndPassword(email, password)
      : logInWithEmailAndPassword(email, password);
  };
  return (
    <div className="register__main__page">
      <div className="register__form__container">
        <div className="register__form__header">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/homePageLogo.svg"}
              alt="logo link to home page"
            />
          </Link>
          {LoginOrRegister === "register" ? <h1>Sign up</h1> : <h1>Login</h1>}
        </div>
        <ul className="register__options">
          <li className="register__option" onClick={signInWithGoogleProvider}>
            <FcGoogle className="google__icon" />
            Continue with Google
          </li>
        </ul>
        <div className="separator">
          <div className="separator__left"></div>
          <span className="separator__text">OR</span>
          <div className="separator__right"></div>
        </div>
        <form
          className="the__registration__form"
          onSubmit={(e) => LoginOrRegisterFunc(e, email, password)}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="submit"
            type="submit"
            value={
              LoginOrRegister === "register" ? "Sign up with email" : "Login"
            }
          />
        </form>
        <div className="register__form__footer">
          <p className="terms__and__conditions">
            By continuing with Google, Apple, or Email, you agree to Todoist's
            Terms of Service and Privacy Policy.
          </p>
          <hr />
          <div className="go__to__login">
            {LoginOrRegister === "register" ? (
              <p>
                Already signed up? <Link to="/login"> Go to login</Link>
              </p>
            ) : (
              <p>
                {" "}
                Don't have an account?<Link to="/register"> Sign up</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
