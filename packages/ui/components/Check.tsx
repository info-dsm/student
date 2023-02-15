import { ChangeEvent } from "react";
import styled from "styled-components";
export interface CheckInputProps {
  id: string;
  onChange: () => void;
  checked: boolean;
}
export const CheckInput = ({ id, ...props }: CheckInputProps) => {
  return (
    <>
      <_Layout>
        <_CheckBox type={"checkbox"} {...{ id }} {...props} />
        <_InLine>{id}</_InLine>
      </_Layout>
    </>
  );
};
const _CheckBox = styled.input`
  width: 15px;
  height: 15px;
`;
const _Layout = styled.div`
  display: flex;
  gap: 10px;
  width: 172px;
`;
const _InLine = styled.div`
  font: 600 14px "Pretendard";
  color: ${(props) => props.theme.colors.black60};
  word-break: break-all;
`;
