import styled from "styled-components";
import Error from "../lib/components/Error";

const ErrorPage = () => {
  return (
    <MainDiv>
      <Error color={"#fff"} />
    </MainDiv>
  );
};
export default ErrorPage;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${({ theme }) => theme.graduation};
  color: #fff;
  font-weight: 600;
`;