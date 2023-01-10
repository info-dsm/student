import { ReactNode } from "react";
import styled from "styled-components";
export interface ToastProps {
  label: "company" | "notice";
  children: ReactNode;
}
export const Toast = ({ label, children }: ToastProps) => {
  return (
    <>
      <_Toast>
        <_Layout>
          <_Title>
            {label === "company" ? "회사 리스트" : "모집공고 리스트"}
          </_Title>
          {children}
        </_Layout>
      </_Toast>
    </>
  );
};
const _Toast = styled.div`
  width: 70rem;
  height: 37rem;
  background-color: ${(props) => props.theme.colors.violet};
  padding-top: 1.5rem;
  margin: 0 auto;
`;
const _Layout = styled.div`
  height: 32rem;
  width: 66rem;
  justify-content: space-between;
  margin: 0 auto;
`;
const _Title = styled.h1`
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.blue};
  font: 700 normal 1.2rem "pretendard", sans-serif;
`;
