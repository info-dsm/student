import styled, { keyframes } from "styled-components";
import React, { useState, useEffect } from "react";
import {
  getEmploymentTotalClass,
  getEmploymentTotalClassProps,
} from "@/src/axios/dist";

const BarGraph = ({
  selectClass,
}: {
  selectClass: {
    state: number;
    setState: (value: number) => void;
  };
}) => {
  const classroom = [
    "소프트웨어\n개발과 1반",
    "소프트웨어\n개발과 2반",
    "임베디드\n개발과",
    "정보\n보안과",
  ];
  const [totalClass, setTotalClass] = useState<getEmploymentTotalClassProps>();
  useEffect(() => {
    getEmploymentTotalClass({ year: 2023 }).then((res) => {
      setTotalClass(res);
    });
  }, []);

  return (
    <>
      {totalClass ? (
        <>
          <ClassInfoDiv>
            <div>
              <span>
                <span>전체 취업률</span>
                <span>
                  {(
                    (totalClass.totalEmployedGradeStudent /
                      totalClass.totalGradeStudent) *
                    100
                  ).toFixed(2)}
                  %
                </span>
              </span>
              <VerticalLine />
              <span>
                <span>전체 통계</span>
                <span>
                  {totalClass.totalEmployedGradeStudent}/
                  {totalClass.totalGradeStudent}명
                </span>
              </span>
            </div>
          </ClassInfoDiv>
          <BarGraphDiv>
            {classroom.map((e, i: number) => (
              <div>
                <div>
                  <BarContainer
                    height={20 * totalClass.classList[i].totalClassStudent}
                  >
                    <div>
                      {totalClass.classList[i].totalEmployedClassStudent}/
                      {totalClass.classList[i].totalClassStudent} 명
                    </div>
                    <BarDiv
                      height={
                        20 * totalClass.classList[i].totalEmployedClassStudent
                      }
                    />
                  </BarContainer>
                </div>
                <Nav
                  selected={i === selectClass.state}
                  onClick={() => selectClass.setState(i)}
                >
                  {e}
                </Nav>
              </div>
            ))}
          </BarGraphDiv>
          <Dot transX={selectClass.state * 7.8}>
            <div />
          </Dot>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default BarGraph;

const Nav = styled.div<{ selected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.selected ? "#6750f8" : "#000")};
  font-weight: ${(props) => (props.selected ? 600 : 400)};
  transition: 0.5s;
`;

const BarGraphDiv = styled.div`
  display: inline-flex;
  text-align: center;
  > div {
    width: 150px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    white-space: pre-wrap;
    font-size: 18px;
  }
  > div > div:nth-child(1) {
    height: 430px;
    width: 50px;
    position: relative;
    > div:nth-child(1) {
      margin-bottom: 10px;
    }
  }
`;

const BarContainer = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
  position: absolute;
  bottom: 0;
  background-color: #d9d9d9;
  > div:nth-child(1) {
    position: absolute;
    width: 100px;
    left: 50%;
    transform: translateX(-50%);
    top: -8%;
    font-size: 20px;
    font-weight: 600;
  }
`;

const BarAnimation = keyframes`
    0% {
        height: 0;
    }
`;

const BarDiv = styled.div<{ height: number }>`
  margin-top: 10px;
  width: 100%;
  height: ${(props) => props.height}px;
  position: absolute;
  bottom: 0;
  background-color: #6750f8;
  animation: ${BarAnimation} 1s ease-in-out forwards;
`;

const ClassInfoDiv = styled.div`
  width: 25vmax;
  text-align: center;
  white-space: pre-line;
  > div {
    display: inline-flex;
    gap: 57px;
    margin-bottom: 70px;
    > span {
      width: 7.29vmax;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      > span:nth-child(1) {
        font-size: 1.5vmax;
        color: #6750f8;
      }
      > span:nth-child(2) {
        font-size: 1.5vmax;
        font-weight: 600;
      }
    }
  }
`;

const VerticalLine = styled.div`
  height: 100px;
  border-radius: 5px;
  border-left: 1.5px solid #cdcdcd;
  width: 0px;
`;

const Dot = styled.div<{ transX: number }>`
  width: 60%;
  height: 10px;
  position: relative;
  > div {
    position: absolute;
    text-align: center;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #593fff;
    transform: translateX(${(props) => props.transX}vmax);
    transition: 0.5s;
    bottom: -20px;
  }
`;
