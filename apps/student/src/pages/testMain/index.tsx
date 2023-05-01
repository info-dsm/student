import styled from "styled-components";
import NewStudentBanner from "@/src/lib/components/student/NewBanner";
import StudentMainNoticeContainer from "../../lib/components/student/NoticeContainer";
import TextBox from "../../lib/components/student/TextBox";
import React, { useLayoutEffect, useState } from "react";
import { getCompanyList1, getCompanyList1ContentProps } from "../../axios/dist";
import HeaderComponent from "ui/components/StudentHeader";
import { Footer } from "ui/components/Footer";
import { useRouter } from "next/router";
import SwiperImage from "@/src/lib/components/student/Swiper";

const NewStudentPage = () => {
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
        <NewStudentBanner />
        <SwiperImage />
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
