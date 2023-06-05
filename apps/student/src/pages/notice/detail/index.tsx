import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  getCompanyDetail,
  getCompanyDetailProps,
  getNoticeDetail,
  getNoticeDetailProps,
  getSupportStatus,
} from "../../../axios/dist";
import { useRouter } from "next/router";
import { Spinner } from "@/../../packages/ui/dist";
import NoticeDetail from "@/src/lib/components/student/detail/NoticeDetail";
import DetailCompanyInfo from "@/src/lib/components/student/detail/CompanyInfo";
import HeaderComponent from "@/../../packages/ui/components/StudentHeader";

const StudentNoticeDetail = () => {
  const query = useRouter().query.id as string;
  const [NoticeInfo, setNoticeInfo] = useState<getNoticeDetailProps>();
  const [CompanyInfo, setCompanyInfo] = useState<getCompanyDetailProps>();
  const [NoticeID, setNoticeID] = useState<string[]>([]);

  useEffect(() => {
    if (query) {
      getNoticeDetail({ id: query }).then((res: getNoticeDetailProps) => {
        setNoticeInfo(res);
        getCompanyDetail({ id: res.company.companyNumber }).then((res1) => {
          setCompanyInfo(res1);
        });
      });
    }
  }, [query]);

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = () => {
    getSupportStatus().then((res) => {
      setNoticeID(res.map((e) => e.notice.noticeId));
    });
  };

  return (
    <>
      {NoticeInfo && CompanyInfo ? (
        <>
          <HeaderComponent />
          <MainDiv>
            <NoticeDetail noticeInfo={NoticeInfo} companyInfo={CompanyInfo} />
            <DetailCompanyInfo
              companyInfo={CompanyInfo}
              date={NoticeInfo.noticeOpenPeriod.endDate}
            />
          </MainDiv>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StudentNoticeDetail;

const MainDiv = styled.div`
  padding: 7.1vmax 25.15vmin;
  display: flex;
  position: relative;

  * {
    font-family: "Pretendard Variable";
  }
`;
