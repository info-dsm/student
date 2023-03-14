import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  getCompanyDetail,
  getCompanyDetailProps,
  getCompanyNotice,
  getWaitingNoticeListContentProps,
} from "../../../axios/dist";
import DetailInfo from "../../../lib/components/student/NoticeDetailInfo";
import StudentCompanyNoticeList from "../../../lib/components/student/noticeList";
import HeaderComponent from "ui/components/StudentHeader";
import { useRouter } from "next/router";
import { Footer } from "ui/components/Footer";
import { Spinner } from "@/../../packages/ui/dist";

const StudentCompanyDetail = ({}: {}) => {
  const query = useRouter().query.id as string;
  const [info, setInfo] = useState<getCompanyDetailProps>();
  const [noticeInfo, setNoticeInfo] =
    useState<getWaitingNoticeListContentProps[]>();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (query) {
      getCompanyDetail({ id: query }).then((res: getCompanyDetailProps) => {
        setInfo(res);
      });
      getCompanyNotice({ id: query }).then(
        (res: getWaitingNoticeListContentProps[]) => {
          setNoticeInfo(res);
        }
      );
    }
  }, [query]);

  return (
    <>
      {info && noticeInfo ? (
        <>
          <HeaderComponent />
          <MainDiv>
            <DetailDiv>
              <>
                <h1>㈜ {info.companyName}</h1>
                <DetailInfo companyInfo={info} />
                <StudentCompanyNoticeList
                  companyInfo={info}
                  info={noticeInfo}
                />
              </>
            </DetailDiv>
          </MainDiv>
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StudentCompanyDetail;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: #f4f4f5;
`;

const DetailDiv = styled.div`
  width: 1200px;
  height: 100%;
  background-color: #fff;
  padding: 174px 100px;

  > h1 {
    margin: 0;
    margin-top: 32px;
    font-size: 40px;
    font-weight: 600;
  }
`;
