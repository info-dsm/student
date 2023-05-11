import HeaderComponent from "@/../../packages/ui/components/StudentHeader";
import { Spinner } from "@/../../packages/ui/dist";
import { getEmploymentClass, getEmploymentClassProps } from "@/src/axios/dist";
import BarGraph from "@/src/lib/components/student/employmentPage/BarGraph";
import ClassInfo from "@/src/lib/components/student/employmentPage/ClassInfo";
import { useState, useEffect } from "react";
import styled from "styled-components";

const EmploymentPage = () => {
  const [classInfo, setClassInfo] = useState<getEmploymentClassProps>();
  const [selectClass, setSelectClass] = useState(0);

  useEffect(() => {
    getEmploymentClass({ classroom: selectClass }).then((res) => {
      setClassInfo(res);
    });
  }, [selectClass]);

  return (
    <>
      {classInfo ? (
        <>
          <HeaderComponent />
          <MainDiv>
            <Container>
              <BarGraph
                selectClass={{ state: selectClass, setState: setSelectClass }}
              />
            </Container>
            <Container>
              <ClassInfo classInfo={classInfo} />
            </Container>
          </MainDiv>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default EmploymentPage;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0 200px;
  * {
    font-family: "Pretendard Variable";
  }
`;

const Container = styled.div`
  position: relative;
  width: 50%;
  margin-top: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
