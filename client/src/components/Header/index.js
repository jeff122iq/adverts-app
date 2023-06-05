import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderLogoWrapper,
  HeaderMobileMenuWrapper,
  HeaderNavigationItem,
  HeaderNavigationWrapper,
  HeaderWrapper,
} from "./styles";
import HeaderLogo from "../../images/logo.svg";
import { headerNavigation } from "./variables";
import Modal from "../Modal";
import AuthForm from "../AuthForm";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Modal open={open} setOpen={setOpen}>
        <AuthForm />
      </Modal>

      <HeaderContainer type="xl">
        <HeaderLogoWrapper>
          <img src={HeaderLogo} alt="" />
        </HeaderLogoWrapper>
        <HeaderMobileMenuWrapper>
          <i className="fa-solid fa-bars"></i>
        </HeaderMobileMenuWrapper>
        <HeaderNavigationWrapper>
          {headerNavigation.map((item) => {
            return (
              <HeaderNavigationItem
                onClick={() => item.authModalOpen && setOpen(!open)}
                hasBackground={item.hasBackground}
                key={item.id}
                to={item.path}
              >
                {item.name}
              </HeaderNavigationItem>
            );
          })}
        </HeaderNavigationWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
