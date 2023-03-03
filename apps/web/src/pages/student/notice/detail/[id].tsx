import {
  applyNotice,
  getApplyList,
  getCompanyDetail,
  getCompanyDetailProps,
  getNoticeDetail,
  getNoticeDetailProps,
  presigned,
  reissue,
} from "../../../../axios/dist";
import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import DetailInfo from "../../../../lib/components/student/NoticeDetailInfo";
import DetailRecruitmentJob from "../../../../lib/components/student/RecruitmentJob";
import QualificationRequirements from "../../../../lib/components/student/Qualification";
import Welfare from "../../../../lib/components/student/Welfare";
import HeaderComponent from "ui/components/StudentHeader";
import { useRouter } from "next/router";
import axios from "axios";

const NoticeDetail = () => {
  const query = useRouter().query.id as string;
  const form = useRef(null);
  const [NoticeInfo, setNoticeInfo] = useState<getNoticeDetailProps>();
  const [CompanyInfo, setCompanyInfo] = useState<getCompanyDetailProps>();

  useLayoutEffect(() => {
    if (query)
      getNoticeDetail({ id: query }).then((res: getNoticeDetailProps) => {
        setNoticeInfo(res);
        getCompanyDetail({ id: res.company.companyNumber }).then((res1) => {
          setCompanyInfo(res1);
        });
      });
  }, [query]);

  const applyNoticeForm = (e: any) => {
    if (NoticeInfo)
      reissue().then(() => {
        applyNotice({
          id: NoticeInfo.noticeId,
          formData: {
            fileName: e.target.value,
            contentType: "application/pdf",
          },
        })
          .then((res) => {
            const { url } = res as { url: string };
            presigned(url, e.target.files[0]);
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
        {NoticeInfo && CompanyInfo ? (
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
            <ApplyBtn>
              <label htmlFor="resume">지원하기</label>
              <input
                type={"file"}
                name="resume"
                id="resume"
                // accept={".pdf"}
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
        ) : (
          <></>
        )}
      </MainDiv>
    </>
  );
};

export default NoticeDetail;

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
