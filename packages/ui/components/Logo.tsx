import PurpleLogo from "../images/PurpleLogo";
import WhiteLogo from "../images/WhiteLogo";
import styled from "styled-components";
export interface LogoProps {
  main: boolean;
  onClick: () => void;
}
export const Logo = (props: LogoProps) => {
  return (
    <>
      <_Layout {...props}>
        {props.main ? <PurpleLogo width="34" height="32" /> : <WhiteLogo />}{" "}
        info
      </_Layout>
    </>
  );
};
const _Layout = styled.div<{ main: boolean }>`
  height: 32px;
  width: max-content;
  font: 700 34px "pretendard";
  cursor: pointer;
  color: ${(props) =>
    props.main ? props.theme.colors.blue : props.theme.colors.white};
`;
