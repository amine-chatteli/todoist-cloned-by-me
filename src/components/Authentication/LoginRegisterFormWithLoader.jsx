import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner } from "../Spinner";
import firebase from "firebase";
import { LoginRegisterForm } from "./LoginRegisterForm";

export const LoginRegisterFormWithLoader = ({ LoginOrRegister }) => {
  const [user, loading] = useAuthState(firebase.auth());

  return loading ? (
    <Spinner />
  ) : (
    <LoginRegisterForm LoginOrRegister={LoginOrRegister} />
  );
};
