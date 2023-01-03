// ui 컴포넌트 사용 예시입니다.
import * as React from "react";
import styled from "styled-components";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <>
      <_Button>{label}</_Button>
    </>
  );
};
const _Button = styled.div`
  width: 5rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.colors.blue};
`;
