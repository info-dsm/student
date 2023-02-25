import styled from "styled-components";
import { PropsWithChildren } from "react";
export const CompanyTable = ({ children }: PropsWithChildren) => {
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
  overflow: scroll;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
`;
