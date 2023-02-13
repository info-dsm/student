import PurpleLogo from "../images/PurpleLogo";
import styled from "styled-components";
export interface SmallLogoProps {
  onClick: () => void;
}
export const SmallLogo = (props: SmallLogoProps) => {
  return (
    <>
      <_Layout {...props}>
        <PurpleLogo width="22" height="21" /> info
      </_Layout>
    </>
  );
};
const _Layout = styled.div`
  cursor: pointer;
  height: 30px;
  width: 63px;
  font: 700 20px "pretendard";
  cursor: pointer;
  color: ${(props) => props.theme.colors.blue};
`;
