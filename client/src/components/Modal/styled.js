import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.76);
  z-index: ${(props) => (props.open ? "10" : "-1")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
