import styled, { css } from "styled-components";
import { Container } from "../Container";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const HeaderLogoWrapper = styled.div`
  width: 100%;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
  }
`;

export const HeaderNavigationWrapper = styled.nav`
  width: 100%;
  max-width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 769px) {
    display: none;
  }
`;

export const HeaderNavigationItem = styled(Link)`
  text-decoration: none;
  margin-left: 20px;
  ${(props) =>
    props.hasBackground
      ? css`
          background: linear-gradient(to right, #ff0099, #493240);
          color: #ffffff;
          padding: 10px;
          border-radius: 20px;
        `
      : css`
          background: linear-gradient(to right, #ff0099, #493240);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
`;

export const HeaderMobileMenuWrapper = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: block;
    width: 100%;
    max-width: 50px;
    white-space: nowrap;
    font-size: 30px;
    & > i {
      background: linear-gradient(to right, #ff0099, #493240);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
