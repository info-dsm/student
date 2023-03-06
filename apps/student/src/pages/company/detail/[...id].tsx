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

const StudentCompanyDetail = ({}: {}) => {
  const query = useRouter().query.id as string;
  const [info, setInfo] = useState<getCompanyDetailProps>();
  const [noticeInfo, setNoticeInfo] =
    useState<getWaitingNoticeListContentProps[]>();

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
      <HeaderComponent />
      <MainDiv>
        <DetailDiv>
          {info && noticeInfo ? (
            <>
              <img
                src={
                  info.companyIntroductionResponse.companyLogo.fileUrl
                    ? info.companyIntroductionResponse.companyLogo.fileUrl
                    : ""
                }
                alt="company logo"
                placeholder="blur"
              />
              <h1>㈜ {info.companyName}</h1>
              <DetailInfo companyInfo={info} subData={""} />
              <StudentCompanyNoticeList companyInfo={info} info={noticeInfo} />
            </>
          ) : (
            <></>
          )}
        </DetailDiv>
      </MainDiv>
      <Footer />
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

  > img {
    width: 1000px;
    height: 600px;
    object-fit: contain;
  }

  > h1 {
    margin: 0;
    margin-top: 32px;
    font-size: 40px;
    font-weight: 600;
  }
`;
