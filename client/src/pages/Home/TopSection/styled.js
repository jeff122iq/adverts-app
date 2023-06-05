import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SubTitle } from "../../../components/SubTitle";
import { Title } from "../../../components/Title";

export const TopSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopSectionContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 20px;
`;

export const TopSectionTextWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  text-align: center;
`;

export const TopSectionTitle = styled(Title)`
  background: linear-gradient(to right, #ff0099, #493240);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 20px 0;
`;

export const TopSectionSubTitle = styled(SubTitle)`
  color: #1c174b;
`;

export const TopSectionParagraph = styled.p`
  color: #1c174b;
`;
