import { ChangeEvent } from "react";
import styled from "styled-components";

export interface TextAreaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  defaultValue: string;
}
export const TextArea = (props: TextAreaProps) => {
  return <_TextArea {...props} />;
};
const _TextArea = styled.textarea`
  height: 150px;
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  resize: none;
  border-radius: 5px;
  font: 600 14px "Pretendard";
  color: ${(props) => props.theme.colors.black};
  padding: 16px;
  ::placeholder {
    color: ${(props) => props.theme.colors.black40};
  }
`;
