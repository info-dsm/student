import styled from "styled-components";
import StudentBanner from "@/src/lib/components/student/mainPage/Banner";
import React from "react";
import HeaderComponent from "ui/components/StudentHeader";
import { Footer } from "ui/components/Footer";
import SwiperImage from "@/src/lib/components/student/mainPage/Swiper";
import CompanyCarousel from "@/src/lib/components/student/mainPage/CompanyCarousel";

const NewStudentPage = () => {
  // const [companyKind, setCompanyKind] =
  //   useState<getCompanyList1ContentProps[]>();

  // useLayoutEffect(() => {
  //   getCompanyList1({ idx: 0, size: 12 }).then((res) => {
  //     setCompanyKind(res.content);
  //   });
  // }, []);

  return (
    <>
      <MainDiv>
        <HeaderComponent />
        <StudentBanner />
        <SwiperImage />
        <CompanyCarousel />
        <Footer />
      </MainDiv>
    </>
  );
};

export default NewStudentPage;

const MainDiv = styled.div`
  overflow: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  * {
    font-family: "Pretendard Variable";
  }
  hr {
    scroll-snap-align: start;
    margin: 0;
    background-color: ${(props) => props.theme.colors.black};
    border: none;
  }

  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.gray};
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #6141cc;
    border-radius: 3px;
    width: 10px;
  }
`;
