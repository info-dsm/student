import { ReactNode } from "react";
import styled from "styled-components";
export interface ToastProps {
  label: "company" | "notice";
  children: ReactNode;
}
export const Toast = ({ label, children }: ToastProps) => {
  return (
    <>
      <_Toast>{children}</_Toast>
    </>
  );
};
const _Toast = styled.div`
  width: 70rem;
  height: 35rem;
  background-color: ${(props) => props.theme.colors.violet};
  padding-top: 1.5rem;
`;
const _Layout = styled.div`
  height: ;
`;
const _Title = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  font: 700 normal 1.2rem "pretendard", sans-serif;
`;
