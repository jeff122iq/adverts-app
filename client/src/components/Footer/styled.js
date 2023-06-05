import styled from "styled-components";
import {HeaderContainer, HeaderWrapper} from "../Header/styles";

export const FooterWrapper = styled(HeaderWrapper)`
  width: 100%;
  color: #ffffff;
  background: #ad5389;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3c1053, #ad5389);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3c1053, #ad5389); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const FooterContainer = styled(HeaderContainer)`
`