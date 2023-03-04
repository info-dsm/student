import styled, { keyframes } from "styled-components";

export const Spinner = () => {
  return (
    <_BackGround>
      <_Spiiner></_Spiiner>
    </_BackGround>
  );
};
const Rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`;
const _BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: ${({ theme }) => theme.colors.black40};
`;
const _Spiiner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${Rotation} 1s linear infinite;
`;
