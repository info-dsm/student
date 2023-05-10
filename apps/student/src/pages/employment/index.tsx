import HeaderComponent from "@/../../packages/ui/components/StudentHeader";
import ClassInfo from "@/src/lib/components/student/employmentPage/ClassInfo";
import RoundGraph from "@/src/lib/components/student/employmentPage/RoundGraph";
import styled from "styled-components";

const EmploymentPage = () => {
  const slide = () => {
    return (
      <>
        {[].map((e) => (
          <div></div>
        ))}
      </>
    );
  };

  return (
    <MainDiv>
      <HeaderComponent />
      <Nav>
        <div>{`소프트웨어\n개발 1반`}</div>
        <div>{`소프트웨어\n개발 2반`}</div>
        <div>{`임베디드\n개발과`}</div>
        <div>{`정보\n보안과`}</div>
        <br />
      </Nav>
      <Container>
        <RoundGraph />
        <ClassInfo />
      </Container>
      <Swiper></Swiper>
    </MainDiv>
  );
};

export default EmploymentPage;

const Swiper = styled.div`
  width: 100vw;
`;

// const Slide = style.ddiv`
    
// `

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
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 290px;
  height: 470px;
`;

const Nav = styled.div`
  padding: 140px 0 0 324px;
  white-space: pre-wrap;
  display: inline-flex;
  font-size: 18px;
  gap: 60px;
  div {
    text-align: center;
  }
`;
