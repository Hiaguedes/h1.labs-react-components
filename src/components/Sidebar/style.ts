import styled, { css } from "styled-components";
interface SidebarBaseProps {
  visible: boolean;
}

const SidebarBase = styled.aside<SidebarBaseProps>`
  background-color: ${({ theme }) => theme.sidebarBackground};
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 300px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.5s ease;

  ${({ visible }) =>
    !visible &&
    css`
      position: absolute;
      left: -250px;
      transition: left 0.5s ease;
    `}
`;

const Content = styled.div`
  width: 85%;
  height: 90%;
`;

const SideButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 50px;
  color: white;
  background-color: #000;
  cursor: pointer;
`;

export const SidebarStyles = { SidebarBase, Content, SideButton };
