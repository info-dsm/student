import { ChangeEvent } from "react";
import styled from "styled-components";

export interface OtherSearchProps {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const OtherSearch = (props: OtherSearchProps) => {
  return (
    <>
      <_Layout>
        <_Text>기타</_Text>
        <_SearchBar type={"text"} {...props} />
      </_Layout>
    </>
  );
};
const _Text = styled.div`
  font: 500 14px "Pretendard";
  color: ${({ theme }) => theme.colors.black};
`;
const _SearchBar = styled.input`
  width: 500px;
  height: 30px;
  border: none;
  padding: 0 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray};
  ::placeholder {
    color: ${(props) => props.theme.colors.black40};
  }
`;
const _Layout = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
