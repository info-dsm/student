import styled from "styled-components";

export interface CheckBoxProps {
  onChange: () => void;
  text: string;
  checked: boolean;
}
export const CheckBox = ({ text, ...props }: CheckBoxProps) => {
  return (
    <>
      <_Box>
        <_Text>{text}</_Text>
        <_CheckBox type={"checkbox"} {...props} />
      </_Box>
    </>
  );
};
const _Box = styled.div`
  width: max-content;
  padding: 0 10px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  gap: 5px;
  align-items: center;
  border-radius: 5px;
`;
const _Text = styled.div`
  font: 700 14px "Pretendard";
  color: ${({ theme }) => theme.colors.black};
`;
const _CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;
