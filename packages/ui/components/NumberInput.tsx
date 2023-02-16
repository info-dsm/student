import { ChangeEvent } from "react";
import styled from "styled-components";
export interface NumberInputProps {
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string;
  last?: string;
}
export const NumberInput = ({
  text,
  last = "명",
  ...props
}: NumberInputProps) => {
  return (
    <>
      <_Layout>
        <_Text status={true}>{text}</_Text> <_Input {...props} type={"text"} />
        <_Text status={false}>{last}</_Text>
      </_Layout>
    </>
  );
};
const _Input = styled.input`
  width: 70px;
  height: 30px;
  font: 700 14px "Pretendard";
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  border-radius: 5px;
  padding: 0 10px;
`;
const _Layout = styled.div`
  display: flex;
  gap: 9px;
`;
const _Text = styled.div<{ status: boolean }>`
  font: 500 16px "Pretendard";
  line-height: 30px;
  color: ${({ theme, status }) =>
    status ? theme.colors.blue : theme.colors.black};
`;
