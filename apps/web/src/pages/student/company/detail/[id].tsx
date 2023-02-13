import styled from "styled-components";
import React from "react";
import {
  getCompanyDetail,
  getCompanyDetailProps,
  getCompanyNotice,
  getWaitingNoticeListContentProps,
} from "apis";
import DetailInfo from "../../detail/NoticeDetailInfo";
import StudentCompanyNoticeList from "./noticeList";
import HeaderComponent from "ui/components/Header";

const StudentCompanyDetail = ({
  data,
  noticeData,
}: {
  data: string;
  noticeData: string;
}) => {
  const info: getCompanyDetailProps = JSON.parse(data);
  const noticeInfo: getWaitingNoticeListContentProps[] = JSON.parse(noticeData);

  return (
    <>
      <HeaderComponent />
      <MainDiv>
        <DetailDiv>
          <img
            src={
              info.companyIntroductionResponse.companyLogo.fileUrl
                ? info.companyIntroductionResponse.companyLogo.fileUrl
                : ""
            }
            alt="company logo"
          />
          <h1>㈜ {info.companyName}</h1>
          <DetailInfo companyInfo={info} subData={""} />
          <StudentCompanyNoticeList companyInfo={info} info={noticeInfo} />
        </DetailDiv>
      </MainDiv>
    </>
  );
};

export default StudentCompanyDetail;

export async function getServerSideProps(context: { query: { id: string } }) {
  const id = context.query.id as string;

  const data: getCompanyDetailProps = await getCompanyDetail({ id: id }).then(
    (res: getCompanyDetailProps) => {
      return res;
    }
  );

  const notice: getWaitingNoticeListContentProps[] = await getCompanyNotice({
    id: id,
  }).then((res: getWaitingNoticeListContentProps[]) => {
    return res;
  });

  return {
    props: {
      data: JSON.stringify(data),
      noticeData: JSON.stringify(notice),
    },
  };
}

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
