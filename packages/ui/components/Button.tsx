// ui 컴포넌트 사용 예시입니다.
import * as React from "react";
import styled from "styled-components";
import { ReactNode } from "react";

type ChildType = { children: ReactNode };

export const Button = ({ children }: ChildType) => {
  return (
    <>
      <_Button>{children}</_Button>
    </>
  );
};
const _Button = styled.div`
  width: 5rem;
  height: 1.5rem;
`;
