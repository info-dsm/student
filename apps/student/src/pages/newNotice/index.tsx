import HeaderComponent from "@/../../packages/ui/components/StudentHeader";
import StudentNoticeBanner from "@/src/lib/components/student/noticePage/Banner";
import styled from "styled-components";

const NoticePage = () => {
  return (
    <MainDiv>
      <HeaderComponent />
      <StudentNoticeBanner />
      <div>a</div>
    </MainDiv>
  );
};
export default NoticePage;

const MainDiv = styled.div`
  * {
    font-family: "Pretendard Variable";
  }
`;
