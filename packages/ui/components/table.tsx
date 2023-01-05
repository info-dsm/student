import { ReactNode } from "react";
import styled from "styled-components";
export interface TableProps {
  children: ReactNode;
}
export const Table = ({ children }: TableProps) => {
  return (
    <>
      <BigTable>{children}</BigTable>
    </>
  );
};
const BigTable = styled.div`
  width: 70rem;
  height: 32.5rem;
  background-color: ${(props) => props.theme.colors.violet};
  border-radius: 10px;
`;
