import React from "react";
import {
  TopSectionContainer,
  TopSectionParagraph,
  TopSectionSubTitle,
  TopSectionTextWrapper,
  TopSectionTitle,
  TopSectionWrapper,
} from "./styled";
import { Button } from "../../../components/Button";

const TopSection = () => {
  return (
    <TopSectionWrapper>
      <TopSectionContainer type="xl">
        <TopSectionTextWrapper>
          <TopSectionSubTitle>Welcome to my application</TopSectionSubTitle>
          <TopSectionTitle>
            Sell faster and easier with our classifieds service!
          </TopSectionTitle>
          <TopSectionParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            at aut consectetur dignissimos earum eius, est ex fugiat ipsum non
            quod sed, soluta unde ut veniam vero voluptates? Labore, quasi!
          </TopSectionParagraph>
        </TopSectionTextWrapper>
        <Button>Add first advert</Button>
      </TopSectionContainer>
    </TopSectionWrapper>
  );
};

export default TopSection;
