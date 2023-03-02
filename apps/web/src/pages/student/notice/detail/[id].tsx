import {
  applyNotice,
  getApplyList,
  getCompanyDetail,
  getCompanyDetailProps,
  getNoticeDetail,
  getNoticeDetailProps,
  reissue,
} from "apis";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import DetailInfo from "../../../../lib/components/student/NoticeDetailInfo";
import DetailRecruitmentJob from "./RecruitmentJob";
import QualificationRequirements from "./Qualification";
import Welfare from "./Welfare";
import HeaderComponent from "ui/components/StudentHeader";

const NoticeDetail = ({
  noticeInfo,
  companyInfo,
}: {
  noticeInfo: string;
  companyInfo: string;
}) => {
  const form = useRef(null);
  const NoticeInfo: getNoticeDetailProps = JSON.parse(noticeInfo);
  const CompanyInfo: getCompanyDetailProps = JSON.parse(companyInfo);

  useEffect(() => {
    // console.log(
    //   getApplyList({
    //     number: CompanyInfo.companyNumber,
    //     id: NoticeInfo.noticeId,
    //     status: "WAITING",
    //   })
    // );
  }, []);

  const applyNoticeForm = (e: any) => {
    reissue().then(() => {
      applyNotice({
        id: NoticeInfo.noticeId,
        formData: {
          fileName: e.target.value,
          contentType: "application/pdf",
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <>
      <HeaderComponent />
      <MainDiv>
        <DetailDiv>
          <img
            src={
              CompanyInfo.companyIntroductionResponse.companyPhotoList[0]
                ? CompanyInfo.companyIntroductionResponse.companyPhotoList[0]
                    .fileUrl
                : ""
            }
            alt=""
          />
          <h1>
            {NoticeInfo.classificationResponse.map((t, i, a) => (
              <>
                {t.name}
                {a.length - 1 !== i ? ", " : " "}
              </>
            ))}
            개발자 모집합니다.
          </h1>
          <h6>㈜ {NoticeInfo.company.companyName}</h6>
          <ApplyBtn ref={form}>
            <label htmlFor="resume">지원하기</label>
            <input
              type={"file"}
              name="resume"
              id="resume"
              accept={".pdf"}
              onChange={(e) => applyNoticeForm(e)}
            />
          </ApplyBtn>
          <DetailInfo
            companyInfo={CompanyInfo}
            subData={`${NoticeInfo.noticeOpenPeriod.startDate} ~ ${NoticeInfo.noticeOpenPeriod.endDate}`}
          />
          <DetailRecruitmentJob
            noticeInfo={NoticeInfo}
            companyInfo={CompanyInfo}
          />
          <QualificationRequirements noticeInfo={NoticeInfo} />
          <Welfare noticeInfo={NoticeInfo} />
        </DetailDiv>
      </MainDiv>
    </>
  );
};

export default NoticeDetail;

export async function getServerSideProps(context: { query: { id: string } }) {
  const id = context.query.id as string;

  const noticeData: getNoticeDetailProps = await getNoticeDetail({
    id: id,
  }).then((res: getNoticeDetailProps) => {
    return res;
  });

  const companyData: getCompanyDetailProps = await getCompanyDetail({
    id: noticeData.company.companyNumber,
  }).then((res: getCompanyDetailProps) => {
    return res;
  });

  return {
    props: {
      noticeInfo: JSON.stringify(noticeData),
      companyInfo: JSON.stringify(companyData),
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

const ApplyBtn = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  label {
    display: inline-block;
    padding: 10px 24px;
    background-color: ${(props) => props.theme.colors.blue};
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    border-radius: 20px;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    margin-bottom: 10px;
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    /* border-radius: 24px;
    cursor: pointer;
    color: #fff;
    background-color: #6750f8;
    border: none;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: 600; */
  }
`;

const DetailDiv = styled.div`
  width: 1200px;
  height: 100%;
  background-color: #fff;
  padding: 174px 100px;

  > img {
    width: 1000px;
    height: 600px;
    object-fit: cover;
  }

  > h1 {
    margin: 0;
    margin-top: 32px;
    font-size: 40px;
    font-weight: 600;
  }

  > h6 {
    margin: 0;
    margin-top: 8px;
    font-size: 18px;
    font-weight: 600;
  }
`;
