import HeaderComponent from "@/../../packages/ui/components/StudentHeader";
import { getEmploymentClass, getEmploymentClassProps } from "@/src/axios/dist";

import ClassInfo from "@/src/lib/components/student/employmentPage/ClassInfo";
import RoundGraph from "@/src/lib/components/student/employmentPage/RoundGraph";
import Swiper from "@/src/lib/components/student/employmentPage/Swiper";
import { useState, useEffect } from "react";
import styled from "styled-components";

const EmploymentPage = () => {
  const classroom = [
    "소프트웨어\n개발 1반",
    "소프트웨어\n개발 2반",
    "임베디드\n개발과",
    "정보\n보안과",
  ];
  const [selectClass, setSelectClass] = useState(0);
  const [classInfo, setClassInfo] = useState<getEmploymentClassProps>();

  useEffect(() => {
    getEmploymentClass({ classroom: selectClass }).then((res) => {
      setClassInfo(res);
    });
  }, [selectClass]);

  return (
    <MainDiv>
      <HeaderComponent />
      <Nav>
        <Dot transX={1.97 + selectClass * 7.29} />
        {classroom.map((e, i) => (
          <NavContent
            onClick={() => {
              setSelectClass(i);
            }}
            selected={i === selectClass}
          >
            <span>{e}</span>
          </NavContent>
        ))}
      </Nav>
      {classInfo ? (
        <>
          <Container>
            <RoundGraph
              rate={
                (classInfo.totalEmployedClassStudent /
                  classInfo.totalClassStudent) *
                100
              }
            />
            <ClassInfo classInfo={classInfo} />
          </Container>
          <Swiper classInfo={classInfo} />
        </>
      ) : (
        <></>
      )}
    </MainDiv>
  );
};

export default EmploymentPage;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  * {
    font-family: "Pretendard Variable";
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15.1vmax;
  height: 50.53vmin;
`;

const Nav = styled.div`
  padding: 15vmin 0 0 16.5vmax;
  white-space: pre-line;
  display: inline-flex;
  font-size: 0.93vmax;
  gap: 3.19vmax;
  position: relative;
`;

const Dot = styled.div<{ transX: number }>`
  position: absolute;
  text-align: center;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #593fff;
  transform: translateX(${(props) => props.transX}vmax);
  transition: 0.5s;
  bottom: -20px;
`;

const NavContent = styled.div<{ selected: boolean }>`
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  width: 4.16vmax;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  span {
    color: ${(props) => (props.selected ? "#593fff" : "#000")};
    transition: 0.5s;
  }
`;
