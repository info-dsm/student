import styled from "styled-components";
export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <>
      <_Button {...props}>{text}</_Button>
    </>
  );
};
const _Button = styled.div`
  width: max-content;
  height: 1.5rem;
  font: 700 0.7rem "Pretendard";
  line-height: 1.5rem;
  border-radius: 0.25rem;
  text-align: center;

  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  :hover {
    filter: brightness(0.8);
  }
  padding: 0 1rem;
`;
