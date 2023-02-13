import styled from "styled-components";
import { ChildProps } from "../style/CustomThemeProvider";
export interface MiniButtonProps extends ChildProps {
  size: string;
  less: number;
  onClick?: () => void;
}

export const MiniButton = ({ children, ...props }: MiniButtonProps) => {
  return (
    <>
      <_MiniButton {...props}>{children}</_MiniButton>
    </>
  );
};
const _MiniButton = styled.div<{ size: string; less: number }>`
  width: ${(props) => (props.size === "small" ? "2.5rem" : "3rem")};
  font: 500 normal ${(props) => (props.size === "small" ? "1rem" : "0.7rem")}
      "pretendard",
    sans-serif;
  height: ${(props) => (props.size === "small" ? "2.5rem" : "1.25rem")};
  text-align: center;
  line-height: ${(props) => (props.size === "small" ? "2.5rem" : "1.25rem")};

  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border-radius: 5px;
  :hover {
    filter: brightness(0.8);
  }
`;
