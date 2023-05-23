import styled from "styled-components";
import ClassEmployBar from "./ClassEmployBar";
import { getEmploymentTotalClassProps } from "@/src/axios/dist";
import { useState } from "react";

const ClassEmployment = ({
  classInfo,
}: {
  classInfo: getEmploymentTotalClassProps;
}) => {
  const [selectClass, setSelectClass] = useState(0);

  return (
    <MainDiv>
      <h1>{classInfo.classList[selectClass].information.major}</h1>
      <p>{`${classInfo.classList[selectClass].information.description}`}</p>
      <hr />
      <ClassEmployBar select={{state: selectClass,setState: setSelectClass}} classInfo={classInfo}/>
    </MainDiv>
  );
};
export default ClassEmployment;

const MainDiv = styled.div`
  height: 56%;
  width: 100%;
  background-color: #f8f8f9;
  box-shadow: 0 0 15px 0 #10111240;
  border-radius: 15px;
  > h1 {
    margin: 0;
    padding-top: 3.2vmin;
    font-size: 1.1vmax;
    text-align: center;
  }
  > p {
    padding: 0 10%;
    text-align: center;
    white-space: pre-line;
    font-size: 0.7vmax;
    text-align: center;
    margin-bottom: 18px;
  }
  > hr {
    width: 80%;
    height: 1px;
    border: none;
    background-color: #6750f8;
    padding: 0;
    margin: 0 auto;
  }
`;
