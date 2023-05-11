import styled, { keyframes } from "styled-components";
import React, { useState, useEffect } from "react";
import {
  getEmploymentTotalClass,
  getEmploymentTotalClassProps,
} from "@/src/axios/dist";
import { totalFrame, frameRate } from "@/public/data";

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
  const [employed, setEmployed] = useState<number>(0);

  useEffect(() => {
    getEmploymentTotalClass({ year: 2023 }).then((res) => {
      setTotalClass(res);

      let currentNumber = 0;
      const counter = setInterval(() => {
        const progress = ++currentNumber / totalFrame;
        setEmployed(Math.round(res.totalEmployedGradeStudent * progress));

        if (progress === 1) {
          clearInterval(counter);
        }
      }, frameRate);
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
                  {((employed / totalClass.totalGradeStudent) * 100).toFixed(2)}
                  %
                </span>
              </span>
              <VerticalLine />
              <span>
                <span>전체 통계</span>
                <span>
                  {employed}/{totalClass.totalGradeStudent}명
                </span>
              </span>
            </div>
          </ClassInfoDiv>
          <BarGraphDiv>
            {classroom.map((e, i: number) => (
              <div>
                <div>
                  <BarContainer
                    height={2.3 * totalClass.classList[i].totalClassStudent}
                  >
                    <div>
                      {totalClass.classList[i].totalEmployedClassStudent}/
                      {totalClass.classList[i].totalClassStudent} 명
                    </div>
                    <BarDiv
                      height={
                        2.3 * totalClass.classList[i].totalEmployedClassStudent
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
  font-size: 0.9vmax;
  transition: 0.5s;
`;

const BarGraphDiv = styled.div`
  display: inline-flex;
  text-align: center;
  > div {
    width: 7.8vmax;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    white-space: pre-wrap;
    font-size: 18px;
  }
  > div > div:nth-child(1) {
    height: 46.2vmin;
    width: 2.6vmax;
    position: relative;
  }
`;

const BarContainer = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}vmin;
  position: absolute;
  bottom: 0;
  background-color: #d9d9d9;
  > div:nth-child(1) {
    position: absolute;
    width: 100px;
    left: 50%;
    transform: translateX(-50%);
    top: -8%;
    font-size: 1vmax;
    font-weight: 600;
  }
`;

const BarAnimation = keyframes`
    0% {
        height: 0;
    }
`;

const BarDiv = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}vmin;
  position: absolute;
  bottom: 0;
  background-color: #6750f8;
  animation: ${BarAnimation} 1.5s ease-in-out forwards;
`;

const ClassInfoDiv = styled.div`
  width: 25vmax;
  text-align: center;
  white-space: pre-line;
  > div {
    display: inline-flex;
    gap: 57px;
    margin-bottom: 7.5vmin;
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
