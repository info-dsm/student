import styled from "styled-components"
import { fadeIn, fadeOut } from "../style/fade";
import { LoadProps } from "../utils/interfaces";
import { Icon1x } from "./icons/Icon1x";

export const Load = ({ status }: LoadProps) => {
  return (
    <Div status={status}>
      <Icon1x />
    </Div>
  )
}

const Div = styled.div `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  width: 100vw;
  height: 100vh;
  background-color: #6750F8;

  animation: ${(props: LoadProps) => (props.status ? fadeIn : fadeOut)} .35s forwards;
`
