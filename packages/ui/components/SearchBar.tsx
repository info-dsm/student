import styled from "styled-components";
export interface SearchBarProps {
  placeholder: string;
  onClick: () => void;
  onInput: () => void;
}
export const SearchBar = ({ onClick, ...props }: SearchBarProps) => {
  return (
    <_Layout>
      <_Input {...props} />
      <_Button {...{ onClick }}>검색</_Button>
    </_Layout>
  );
};
const _Layout = styled.div`
  display: inline-block;
  width: 52.5rem;
  height: max-content;
  border: 5px solid ${(props) => props.theme.colors.blue};
  border-radius: 10px;
  display: flex;
`;
const _Input = styled.input`
  flex-grow: 1;
  height: 50px;
  color: ${(props) => props.theme.colors.black};
  ::placeholder {
    color: ${(props) => props.theme.colors.black40};
  }
  padding: 0 16px;
  border: none;
  font: 500 20px "Pretendard";
  line-height: 50px;
`;
const _Button = styled.div`
  width: 125px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font: 500 20px "Pretendard";
  line-height: 50px;
  cursor: pointer;
`;
