import styled from "styled-components";
import { Icon1x } from "./icons/Icon1x";

export const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <Icon1x />
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
  text-align: center; 
  margin: 0;
  padding-top: 17px;
  padding-bottom: 15px;
  border-bottom: 1px solid #EAEAEA;
`
