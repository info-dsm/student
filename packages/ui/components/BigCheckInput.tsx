import { ChangeEvent } from "react";
import styled from "styled-components";
export interface BigCheckProps {
  id?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  status?: boolean;
  type?: string;
  text: string;
}
export const BigCheck = ({
  text,
  type = "checkbox",
  status = false,
  ...props
}: BigCheckProps) => {
  return (
    <>
      <_Layout>
        <_CheckBox {...{ type }} {...props} />
        <_InLine {...{ status }}>{text}</_InLine>
      </_Layout>
    </>
  );
};
const _CheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 0;
`;
const _Layout = styled.div`
  display: flex;
  width: max-content;
  gap: 10px;
  align-items: center;
`;
const _InLine = styled.div<{ status: boolean }>`
  font: 500 16px "Pretendard";
  color: ${({ theme, status }) =>
    status ? theme.colors.blue : theme.colors.black};
`;
