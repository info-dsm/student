// ui 컴포넌트 사용 예시입니다.
import * as React from "react";
import styled from "styled-components";
import { ReactNode } from "react";

type ChildType = { content: string };

export const Button = () => {
  return (
    <>
      <_Button width={200} height={100}>
        안녕하세요
      </_Button>
    </>
  );
};
const _Button = styled.div<{ width: number; height: number }>`
  width: 5rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.colors.admin.blue};
`;
