import styled from "styled-components";
import RoundGraph from "../employmentPage/RoundGraph";
import Statistics from "./Statistics";
import { getEmploymentTotalClassProps } from "@/src/axios/dist";

const TotalEmployment = ({
  classInfo,
}: {
  classInfo: getEmploymentTotalClassProps;
}) => {
  return (
    <>
      <MainDiv>
        <h1>전체 취업 현황</h1>
        <RoundGraph
          rate={
            classInfo.totalEmployedGradeStudent / classInfo.totalGradeStudent * 100
          }
        />
        <Statistics classInfo={classInfo}/>
      </MainDiv>
    </>
  );
};
export default TotalEmployment;

const MainDiv = styled.div`
  width: 100%;
  height: 42%;
  background-color: #f8f8f9;
  box-shadow: 0 0 15px 0 #10111240;
  border-radius: 15px;
  position: relative;

  > h1 {
    height: 15%;
    font-size: 1.1vmax;
    margin: 0;
    text-align: center;
    padding-top: 3.2vmin;
  }
`;
