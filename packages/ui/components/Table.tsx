import styled from "styled-components";
import React, { ReactNode } from "react";
export interface TableProps {
  children: ReactNode;
}
export const Table = ({ children }: TableProps) => {
  return (
    <>
      <_Table>{children}</_Table>
    </>
  );
};
const _Table = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 65rem;
  height: 26rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
