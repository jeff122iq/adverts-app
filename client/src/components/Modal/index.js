import React, { Fragment } from "react";
import { ModalChildrenWrapper, ModalWrapper } from "./styled";

const Modal = ({ children, open, setOpen }) => {
  const handleOpenModal = () => {
    setOpen(!open);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalWrapper open={open} onClick={handleOpenModal}>
      <ModalChildrenWrapper onClick={stopPropagation}>
        {children}
      </ModalChildrenWrapper>
    </ModalWrapper>
  );
};

export default Modal;
