// button 컴포넌트입니다. size뱔로 100px, 120px, 150px입니다.
import React from "react";
import styled from "styled-components";
import { ChildProps } from "../style/CustomThemeProvider";
export interface ButtonProps extends ChildProps {
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
export const MiniButton = ({
  children,
  less,
  size,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <>
      <_MiniButton size={size} less={less} onClick={() => onClick}>
        {children}
      </_MiniButton>
    </>
  );
};
const _MiniButton = styled.div<{ size: string; less: number }>`
  width: ${(props) => (props.size === "small" ? "2.5rem" : "3rem")};
  font: 500 normal ${(props) => (props.size === "small" ? "1rem" : "0.7rem")}
      "pretendard",
    sans-serif;
  height: ${(props) => (props.size === "small" ? "2.5rem" : "1.25rem")};
  text-align: center;
  line-height: ${(props) => (props.size === "small" ? "2.5rem" : "1.25rem")};

  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
`;
