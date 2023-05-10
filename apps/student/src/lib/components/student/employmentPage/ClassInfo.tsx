import { getEmploymentClassProps } from "@/src/axios/dist";
import styled from "styled-components";

const ClassInfo = ({ classInfo }: { classInfo: getEmploymentClassProps }) => {
  return (
    <ClassInfoDiv>
      <h1>{classInfo.information.major}</h1>
      <p>{classInfo.information.description}</p>
      <div>
        <div>
          <span>취업률</span>
          <span>
            {(
              (classInfo.totalEmployedClassStudent /
                classInfo.totalClassStudent) *
              100
            ).toFixed(2)}
            %
          </span>
        </div>
        <VerticalLine />
        <div>
          <span>통계</span>
          <span>
            {classInfo.totalEmployedClassStudent}/{classInfo.totalClassStudent}
            명
          </span>
        </div>
        <VerticalLine />
        <div>
          <span>담임</span>
          <span>{classInfo.information.homeroomTeacherName}</span>
        </div>
      </div>
    </ClassInfoDiv>
  );
};
export default ClassInfo;

const VerticalLine = styled.div`
  height: 54px;
  border-radius: 5px;
  border-left: 1.5px solid #cdcdcd;
`;

const ClassInfoDiv = styled.div`
  width: 25vmax;
  text-align: center;
  white-space: pre-line;
  > h1 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 2vmax;
  }
  > p {
    font-size: 0.93vmax;
    color: #000000a5;
    margin-bottom: 56px;
  }
  > div {
    display: inline-flex;
    gap: 38px;
    margin-bottom: 130px;
    > div {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      > span:nth-child(1) {
        font-size: 0.93vmax;
        color: #6750f8;
      }
      > span:nth-child(2) {
        font-size: 1.1vmax;
        font-weight: 600;
      }
    }
  }
`;
