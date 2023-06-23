import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  getCompanyDetail,
  getCompanyDetailProps,
  getCompanyNotice,
  getWaitingNoticeListContentProps,
} from "../../../axios/dist";
import { useRouter } from "next/router";
import { Spinner } from "@/../../packages/ui/dist";
import CompanyDetail from "@/src/lib/components/student/companyPage/detail/CompanyDetail";
import CompanyPageNotice from "@/src/lib/components/student/companyPage/NoticeContainer";
import HeaderComponent from "ui/components/StudentHeaderv2";
import { Footer } from "ui/components/Footer";

const StudentCompanyDetail = ({}: {}) => {
  const query = useRouter().query.id as string;
  const [info, setInfo] = useState<getCompanyDetailProps>();
  const [noticeInfo, setNoticeInfo] =
    useState<getWaitingNoticeListContentProps[]>();

  useEffect(() => {
    if (query) {
      getCompanyDetail({ id: query }).then((res: getCompanyDetailProps) =>
        setInfo(res)
      );
      getCompanyNotice({ id: query }).then(
        (res: getWaitingNoticeListContentProps[]) => setNoticeInfo(res)
      );
    }
  }, [query]);

  return (
    <>
      {info && noticeInfo ? (
        <div id="StudentCompanyDetail">
          <HeaderComponent />
          <MainDiv>
            <CompanyDetail companyInfo={info} />
            <CompanyPageNotice companyInfo={info} noticeInfo={noticeInfo} />
          </MainDiv>
          <Footer />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StudentCompanyDetail;

const MainDiv = styled.div`
  padding: 7.1vmax 25.15vmin;
  display: flex;
  position: relative;

  * {
    font-family: "Pretendard Variable";
  }
`;
