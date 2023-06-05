import styled from "styled-components";
import { TopSectionTextWrapper } from "../../pages/Home/TopSection/styled";

export const AuthFormWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
`;

export const AuthFormButtonWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthFormContainer = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgb(28, 23, 75);
  padding: 30px;
`;

export const AuthFormDescription = styled.p`
  margin: 10px 0;
  color: rgb(28, 23, 75);
`;

export const AuthFormImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100%;
  }
`;

export const AuthFormTextWrapper = styled(TopSectionTextWrapper)`
  align-items: flex-start;
`;
