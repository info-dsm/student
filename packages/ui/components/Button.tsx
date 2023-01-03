// ui 컴포넌트 사용 예시입니다.
import * as React from "react";
import styled from "styled-components";
export interface ButtonProps {
  children: React.ReactNode;
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
      <_Button size={size} less={less}>
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
