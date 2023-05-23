import styled from "styled-components";
import RoundGraph from "../employmentPage/RoundGraph";
import Statistics from "./Statistics";

const TotalEmployment = () => {
  return (
    <>
      <MainDiv>
        <h1>전체 취업 현황</h1>
        <RoundGraph rate={23} />
        <Statistics />
      </MainDiv>
    </>
  );
};
export default TotalEmployment;

const MainDiv = styled.div`
  width: 100%;
  height: 49%;
  background-color: #f8f8f9;
  box-shadow: 0 0 15px 0 #10111240;
  border-radius: 15px;

  > h1 {
    font-size: 1.2vmax;
    margin: 0;
    text-align: center;
    padding-top: 3.2vmin;
  }
`;