import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <_BackGround></_BackGround>
    </>
  );
};
const _BackGround = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100vw;
  height: 300px;
`;
