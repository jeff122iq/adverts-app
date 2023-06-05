import React, { useState } from "react";
import { Title } from "../../Title";
import { Input } from "../../Input";
import {
  AuthFormContainer,
  AuthFormDescription,
  AuthFormImageContainer,
  AuthFormTextWrapper,
  AuthFormWrapper,
} from "../styled";
import SignUpImage from "../../../images/signUp.jpg";
import { Button } from "../../Button";
import { useDispatch } from "react-redux";
import { setSignInForm } from "../../../store/slices/appSlice";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChangeToSignIn = (e) => {
    e.preventDefault();
    dispatch(setSignInForm());
  };

  return (
    <AuthFormWrapper>
      <AuthFormContainer>
        <br />
        <Title>Sign up</Title>
        <AuthFormDescription>
          Create account and make your first advert
        </AuthFormDescription>
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          autocomplete="new-off"
        />
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
            Do you have account?{" "}
            <a href="" onClick={(e) => handleChangeToSignIn(e)}>
              Sign in
            </a>
          </p>
        </AuthFormTextWrapper>
        <Button>Sign up</Button>
      </AuthFormContainer>
      <AuthFormImageContainer>
        <img src={SignUpImage} alt="" />
      </AuthFormImageContainer>
    </AuthFormWrapper>
  );
};

export default SignUp;
