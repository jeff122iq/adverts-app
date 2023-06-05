import { Title } from "../Title";
import SignIn from "../AuthForm/SignIn";
import SignUp from "../AuthForm/SignUp";

export const checkCurrentForm = (status) => {
  switch (status) {
    case "sign-in":
      return <SignIn />;
    case "sign-up":
      return <SignUp />;
    default:
      return <SignUp />;
  }
};
