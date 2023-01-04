// button 컴포넌트입니다. size뱔로 100px, 120px, 150px입니다.
import React, { ReactNode } from "react";
import styled from "styled-components";
export interface ButtonProps {
  children: ReactNode;
  size: string;
  less: number;
  onClick?: () => void;
}
export const Button = ({
  children,
  less,
  size,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <>
      <_Button size={size} less={less} onClick={() => onClick}>
        {children}
      </_Button>
    </>
  );
};
const _Button = styled.div<{ size: string; less: number }>`
  width: ${(props) =>
    props.size === "small"
      ? "5rem"
      : props.size === "aver"
      ? "6rem"
      : "7.5rem"};
  height: 1.5rem;
  line-height: 1.5rem;
  border-radius: ${(props) => props.less}px;
  text-align: center;
  font-size: 0.7rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
`;
