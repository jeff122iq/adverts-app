import React, { useState } from "react";
import { Input } from "../../Input";
import {
  AuthFormContainer,
  AuthFormDescription,
  AuthFormImageContainer,
  AuthFormTextWrapper,
  AuthFormWrapper,
} from "../styled";
import { Title } from "../../Title";
import { setSignUpForm } from "../../../store/slices/appSlice";
import { useDispatch } from "react-redux";
import { Button } from "../../Button";
import SignInImage from "../../../images/signIn.jpg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeToSignUp = (e) => {
    e.preventDefault();
    dispatch(setSignUpForm());
  };

  return (
    <AuthFormWrapper>
      <AuthFormContainer>
        <Title>Sign in</Title>
        <AuthFormDescription>
          Sign in to account and continue to make your adverts
        </AuthFormDescription>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autocomplete="new-off"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autocomplete="new-off"
        />
        <AuthFormTextWrapper>
          <p>
            Don`t have account?
            <a href="" onClick={(e) => handleChangeToSignUp(e)}>
              Sign up
            </a>
          </p>
        </AuthFormTextWrapper>
        <Button>Sign in</Button>
      </AuthFormContainer>
      <AuthFormImageContainer>
        <img src={SignInImage} alt="" />
      </AuthFormImageContainer>
    </AuthFormWrapper>
  );
};

export default SignIn;
