import styled from "styled-components";
import { ChildProps } from "../style/CustomThemeProvider";
export interface MiniButtonProps extends ChildProps {
  onClick: () => void;
}

export const MiniButton = ({ children, ...props }: MiniButtonProps) => {
  return (
    <>
      <_MiniButton {...props}>{children}</_MiniButton>
    </>
  );
};
const _MiniButton = styled.div`
  width: 60px;
  height: 25px;
  font: 700 normal 14px "pretendard", sans-serif;
  text-align: center;
  line-height: 25px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border-radius: 5px;
  :hover {
    filter: brightness(0.8);
  }
`;
