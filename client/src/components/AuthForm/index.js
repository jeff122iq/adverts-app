import React from "react";
import { AuthFormWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { checkCurrentForm } from "../Header/helpers";

const AuthForm = () => {
  const authStatus = useSelector((state) => state.appReducer.authStatus);
  let currentForm = null;

  currentForm = checkCurrentForm(authStatus);

  return <AuthFormWrapper>{currentForm}</AuthFormWrapper>;
};

export default AuthForm;
