import React from "react";
import { FcGoogle } from "react-icons/fc";
import './LoginRegister.css'

export const LoginRegisterForm = ({ LoginOrRegister = "register" }) => {
  return (
    <div className="register__main__page">
      <div className="register__form__container">
        <div className="register__form__header">
          <img
            src={process.env.PUBLIC_URL + "/images/homePageLogo.svg"}
            alt="logo link to home page"
          />
          <h1>{LoginOrRegister}</h1>
        </div>
        <ul className="register__options">
          <li className="option">
            <FcGoogle />
            Continue with Google
          </li>
        </ul>
        <span className="separator">OR</span>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <input
            type="submit"
            value={LoginOrRegister === "register" ? "Sign up with email" : ""}
          />
        </form>
        <div className="register__form__footer">
          <p className="terms__and__conditions">
            By continuing with Google, Apple, or Email, you agree to Todoist's
            Terms of Service and Privacy Policy.
          </p>
          <hr />
          <p className="go__to__login">Already signed up? Go to login</p>
        </div>
      </div>
    </div>
  );
};
