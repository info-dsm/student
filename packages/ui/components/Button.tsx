// ui 컴포넌트 사용 예시입니다.
import * as React from "react";
import styled from "styled-components";
import { ReactNode } from "react";

export interface ChildType {
  children: ReactNode;
}

export const Button = (props: ChildType) => {
  return (
    <>
      <_Button>{props.children}</_Button>
    </>
  );
};
const _Button = styled.div`
  width: 5rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.colors.blue};
`;
