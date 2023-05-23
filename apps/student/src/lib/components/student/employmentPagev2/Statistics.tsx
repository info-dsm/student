import { getEmploymentTotalClassProps } from "@/src/axios/dist";
import styled from "styled-components";

const Statistics = ({
  classInfo,
}: {
  classInfo: getEmploymentTotalClassProps;
}) => {
  return (
    <MainDiv>
      <div>
        <div>전체 취업률</div>
        <hr />
        <span>
          {(
            (classInfo.totalEmployedGradeStudent /
              classInfo.totalGradeStudent) *
            100
          ).toFixed(2)}
          %
        </span>
      </div>
      <div>
        <div>전체 통계</div>
        <hr />
        <span>{classInfo.totalEmployedGradeStudent}/{classInfo.totalGradeStudent}명</span>
      </div>
    </MainDiv>
  );
};
export default Statistics;

const MainDiv = styled.div`
  width: 100%;
  height: 30%;
  display: inline-flex;
  overflow-y: hidden;
  font-size: 0.95vmax;
  > div {
    width: 50%;
    height: 100%;
    border-top: 1px solid #6750f8;
    border-right: 1px solid #6750f8;
    padding: 2vmin;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    > hr {
      width: 3vmax;
      border: none;
      height: 1px;
      background-color: #6750f8;
    }

    + div {
      border-right: none;
    }
  }
`;
