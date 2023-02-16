import { ChangeEvent } from "react";
import styled from "styled-components";
export interface InputNoticeProps {
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  last: string;
}
export const InputNotice = ({ text, last, ...props }: InputNoticeProps) => {
  return (
    <>
      <_Layout>
        <_Text>{text}</_Text>
        <_Input {...props} type={"text"} />
        <_Text>{last}</_Text>
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
const _Text = styled.div`
  font: 500 16px "Pretendard";
  line-height: 30px;
  color: ${({ theme }) => theme.colors.black};
`;
