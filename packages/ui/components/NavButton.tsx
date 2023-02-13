import { ChildProps } from "../src";
import styled from "styled-components";
export interface NavButtonProps extends ChildProps {
  state: boolean;
  onClick: () => void;
}
export const NavButton = ({ state, children, onClick }: NavButtonProps) => {
  return (
    <>
      <_NavButton state={state} onClick={() => onClick}>
        {children}
      </_NavButton>
    </>
  );
};
const _NavButton = styled.div<{ state: boolean }>`
  width: 7rem;
  height: 1.5rem;
  color: ${(props) =>
    props.state ? props.theme.colors.white : props.theme.colors.black};
  background-color: ${(props) =>
    props.state ? props.theme.colors.blue : props.theme.colors.gray};
  border-radius: 5px 5px 0 0;
  :hover {
    filter: brightness(${(props) => (props.state ? 1 : 0.8)});
  }
`;
