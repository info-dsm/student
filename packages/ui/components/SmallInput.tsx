import { ChangeEvent } from "react";
import styled from "styled-components";
export interface SmallInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
  value: string;
  placeholder: string;
}
export const SmallInput = ({ text, ...props }: SmallInputProps) => {
  return (
    <>
      <_Layout>
        <_Text>{text}</_Text>
        <_Input type={"text"} {...props} />
      </_Layout>
    </>
  );
};
const _Layout = styled.div`
  display: flex;
  width: 202px;
  justify-content: space-between;
`;
const _Text = styled.div`
  width: max-content;
  height: 40px;
  font: 500 13px "Pretendard";
  line-height: 40px;
  color: ${({ theme }) => theme.colors.black40};
`;
const _Input = styled.input`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  padding: 0 16px;
  font: 500 12px "Pretendard";
  border: none;
  background-color: ${({ theme }) => theme.colors.gray};
  ::placeholder {
    color: ${(props) => props.theme.colors.black40};
  }
`;
