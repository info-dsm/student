import HeaderComponent from "@/../../packages/ui/components/StudentHeader";
import {
  getEmploymentTotalClass,
  getEmploymentTotalClassProps,
} from "@/src/axios/dist";
import ClassEmployment from "@/src/lib/components/student/employmentPagev2/ClassEmployment";
import EmployGrid from "@/src/lib/components/student/employmentPagev2/EmployGrid";
import TotalEmployment from "@/src/lib/components/student/employmentPagev2/TotalEmployment";
import { useEffect, useState } from "react";
import styled from "styled-components";

const EmploymentPage = () => {
  const [classInfo, setClassInfo] = useState<getEmploymentTotalClassProps>();
  useEffect(() => {
    getEmploymentTotalClass({ year: 2023 }).then((res) => {
      setClassInfo(res);
    });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainDiv>
        <SideBox>
          {classInfo ? (
            <>
              <TotalEmployment classInfo={classInfo} />
              <ClassEmployment classInfo={classInfo} />
            </>
          ) : (
            <></>
          )}
        </SideBox>
        <EmployGrid />
      </MainDiv>
    </>
  );
};
export default EmploymentPage;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  * {
    font-family: "Pretendard Variable";
  }
`;

const SideBox = styled.div`
  width: 25%;
  height: 100%;
  padding: 5.5% 1.5% 1.5% 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid #10111230;
`;
