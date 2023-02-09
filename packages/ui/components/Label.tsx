import styled from "styled-components";
export interface LabelButtonProps {
  onClick: () => void;
  text: string;
  status: boolean;
}
export const LabelButton = ({ text, ...props }: LabelButtonProps) => {
  return (
    <>
      <_Button {...props}>{text}</_Button>
    </>
  );
};
const _Button = styled.div<{ status: boolean }>`
  width: max-content;
  height: 1.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  text-align: center;
  :hover {
    filter: brightness(0.8);
  }
  font: 700 0.8rem "Pretendard";
  line-height: 1.5rem;
  cursor: pointer;
  padding: 0 1.5rem;
  background-color: ${({ theme, status }) =>
    status ? theme.colors.blue : theme.colors.gray};
  color: ${({ theme, status }) =>
    status ? theme.colors.white : theme.colors.black};
`;
