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
      <span>
        <GridBox>
          {classInfo.employmentList.map((e, i) => (
            <div>
              <img src={e.company.companyLogo} alt="c" />
              <div>
                <div>{e.company.companyName}</div>
                <span>{e.company.companyNumber}</span>
              </div>
            </div>
          ))}
        </GridBox>
      </span>
    </ClassInfoDiv>
  );
};
export default ClassInfo;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  > div {
    width: 9vmax;
    height: 9.6vmin;
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 10px;
    display: flex;
    margin: 10px;
    img {
      height: 100%;
      width: 3.5vmax;
      object-fit: contain;
      border-radius: 6px;
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      padding: 5px;
      margin-right: 10px;
    }
    
    > div {
      div {
        text-align: left;
        font-size: 0.6vmax;
        font-weight: 700;
      }
    }
    span {
      font-size: 0.1vmax;
      color: #1011127f;
    }
  }
`;

const VerticalLine = styled.div`
  height: 54px;
  border-radius: 5px;
  border-left: 1.5px solid #cdcdcd;
`;

const ClassInfoDiv = styled.div`
  width: 25vmax;
  text-align: center;
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-bottom: 30px;
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
