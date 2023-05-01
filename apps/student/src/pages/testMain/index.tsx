import styled from "styled-components";
import StudentBanner from "../../lib/components/student/MainPage/Banner";
import StudentMainNoticeContainer from "../../lib/components/student/NoticeContainer";
import TextBox from "../../lib/components/student/TextBox";
import React, { useLayoutEffect, useState } from "react";
import { getCompanyList1, getCompanyList1ContentProps } from "../../axios/dist";
import HeaderComponent from "ui/components/StudentHeader";
import { Footer } from "ui/components/Footer";
import { useRouter } from "next/router";
import SwiperImage from "../../lib/components/student/MainPage/Notice";

const StudentPage = () => {
  const router = useRouter();
  const [companyKind, setCompanyKind] =
    useState<getCompanyList1ContentProps[]>();

  useLayoutEffect(() => {
    getCompanyList1({ idx: 0, size: 12 }).then((res) => {
      setCompanyKind(res.content);
    });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainDiv>
        <StudentBanner />
        <SwiperImage />
        <Footer />
      </MainDiv>
    </>
  );
};

export default StudentPage;

const MainDiv = styled.div`
  overflow: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
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
