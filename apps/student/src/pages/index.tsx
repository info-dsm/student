import styled from "styled-components";
import StudentBanner from "@/src/lib/components/student/mainPage/Banner";
import React from "react";
import HeaderComponent from "ui/components/StudentHeader";
import { Footer } from "ui/components/Footer";
import SwiperImage from "@/src/lib/components/student/mainPage/Swiper";
import CompanyCarousel from "@/src/lib/components/student/mainPage/CompanyCarousel";
import MyInfo from "@/src/lib/components/student/mainPage/MyInfo";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnnouncementList, AnnouncementListProps } from "../axios/dist";
import { Spinner } from "@/../../packages/ui/dist";

const NewStudentPage = () => {
  const [fix, setFix] = useState<boolean>(false);
  const { status, data } = useQuery(["announcement", []], async () =>
    AnnouncementList({ idx: 0, size: 6, type: "전체" })
  );
  return (
    <>
      {status === "loading" ? (
        <Spinner />
      ) : (
        <MainDiv>
          <HeaderComponent />
          <StudentBanner announcement={data as AnnouncementListProps} />
          <SwiperImage fix={fix} />
          <CompanyCarousel fix={fix} />
          <MyInfo fix={{ state: fix, setState: setFix }} />
          <Footer />
        </MainDiv>
      )}
    </>
  );
};

export default NewStudentPage;

const MainDiv = styled.div`
  overflow: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  scroll-behavior: smooth;
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
