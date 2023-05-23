import HeaderComponent from "@/../../packages/ui/components/StudentHeader";
import RoundGraph from "@/src/lib/components/student/employmentPage/RoundGraph";
import TotalEmployment from "@/src/lib/components/student/employmentPagev2/TotalEmployment";
import styled from "styled-components";

const EmploymentPage = () => {
  return (
    <>
      <HeaderComponent />
      <MainDiv>
        <SideBox>
          <TotalEmployment />
        </SideBox>
        <Container></Container>
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
  padding: 5.5% 2% 1.5% 2%;
`;

const Container = styled.div`
  width: 75%;
  height: 100%;
  background-color: blue;
`;
