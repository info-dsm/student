import styled from "styled-components";
import React, { ReactNode } from "react";
type MenuProps = { onClick: () => void; key: string; selected: boolean };

export interface HeaderProps {
  children: ReactNode;
  bgColor: string;
  admin: boolean;
  menu: MenuProps[];
}

export const Header = ({ children, bgColor, admin, menu }: HeaderProps) => {
  return (
    <>
      <_Container {...{ bgColor }}>
        <_Shape>
          <_Layout>
            <div>{children}</div>
          </_Layout>
          <_Nav>
            {menu.map((item: MenuProps) => (
              <_Menu {...{ ...item, admin }}>
                <span>{item.key}</span>
              </_Menu>
            ))}
          </_Nav>
        </_Shape>
      </_Container>
    </>
  );
};
const _Container = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  backdrop-filter: blur(9px);
  width: 100vw;
  height: 80px;
  display: flex;
`;
const _Shape = styled.div`
  width: 65rem;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const _Layout = styled.div`
  width: auto;
  height: min-content;
  div {
    line-height: 80px;
  }
`;
const _Menu = styled.div<{ admin: boolean; selected: boolean }>`
  height: min-content;
  line-height: 80px;
  span {
    font: 500 20px "pretendard";
    cursor: pointer;
    border-bottom: ${(props) =>
      props.selected ? `1px solid ${props.theme.colors.blue}` : "none"};
    color: ${(props) =>
      props.selected
        ? props.theme.colors.blue
        : props.admin
        ? props.theme.colors.black
        : props.theme.colors.white};
    :hover {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;
const _Nav = styled.nav`
  width: 400px;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
`;
