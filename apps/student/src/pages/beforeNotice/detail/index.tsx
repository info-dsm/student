import {
  getCompanyDetail,
  getCompanyDetailProps,
  getNoticeDetail,
  getNoticeDetailProps,
  getSupportStatus,
} from "../../../axios/dist";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailInfo from "../../../lib/components/student/NoticeDetailInfo";
import DetailRecruitmentJob from "../../../lib/components/student/RecruitmentJob";
import QualificationRequirements from "../../../lib/components/student/Qualification";
import Welfare from "../../../lib/components/student/Welfare";
import HeaderComponent from "ui/components/StudentHeader";
import { useRouter } from "next/router";
import { Footer } from "ui/components/Footer";
import Portpoilo from "../../../lib/components/student/portpolio";
import Attachment from "@/src/lib/components/student/attachment";
import NeedAttachment from "@/src/lib/components/student/NeedAttachment";
import Checked2 from "@/public/assets/images/checked2";
import { Spinner } from "@/../../packages/ui/dist";
import NoticeDetailCompanyInfo from "@/src/lib/components/student/CompanyInfo";

const NoticeDetail = () => {
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
        <FontDiv>
          <HeaderComponent />
          <MainDiv>
            <DetailDiv>
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
              <Date>
                <span>
                  {CompanyInfo.isLeading ? (
                    <span>
                      <Checked2 />
                      선도기업
                    </span>
                  ) : (
                    <></>
                  )}
                  {CompanyInfo.isAssociated ? (
                    <span>
                      <Checked2 />
                      협력기업
                    </span>
                  ) : (
                    <></>
                  )}
                </span>
                <span>
                  <span>
                    {NoticeInfo.noticeOpenPeriod.startDate} ~{" "}
                    {NoticeInfo.noticeOpenPeriod.endDate}
                  </span>
                </span>
              </Date>
              <ApplyBtn
                href={"#resume"}
                point={NoticeID.includes(NoticeInfo.noticeId)}
              >
                {/* <div>지원자 수 {NoticeInfo.applicantCount}명</div> */}
                <label
                  style={{
                    cursor: `${
                      NoticeID.includes(NoticeInfo.noticeId)
                        ? "auto"
                        : "pointer"
                    }`,
                  }}
                >
                  {NoticeID.includes(NoticeInfo.noticeId)
                    ? "지원완료"
                    : "지원하기"}
                </label>
              </ApplyBtn>
              <DetailInfo companyInfo={CompanyInfo} />
              <NoticeDetailCompanyInfo companyInfo={CompanyInfo} />
              <DetailRecruitmentJob
                noticeInfo={NoticeInfo}
                companyInfo={CompanyInfo}
              />
              <QualificationRequirements noticeInfo={NoticeInfo} />
              <Welfare noticeInfo={NoticeInfo} />
              <Portpoilo noticeInfo={NoticeInfo} />
              <NeedAttachment noticeInfo={NoticeInfo} />
              <Attachment NoticeID={NoticeID} NoticeInfo={NoticeInfo} />
            </DetailDiv>
          </MainDiv>
          <Footer />
        </FontDiv>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default NoticeDetail;
const FontDiv = styled.div`
  * {
    font-family: "Pretendard Variable";
  }
`;
const Date = styled.div`
  width: 100%;
  display: inline-flex;
  gap: 24px;
  justify-content: flex-end;
  margin-bottom: 50px;
  > span {
    display: inline-flex;
    gap: 24px;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 17px;
    > span {
      display: flex;
      align-items: center;
      gap: 12px;
      > span {
        display: flex;
        align-items: center;
        gap: 7px;
      }
    }
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: #f4f4f5;
`;

const ApplyBtn = styled.a<{ point: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  align-items: center;
  color: #222;
  font-size: 14px;
  gap: 15px;

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
  padding: 124px 100px;

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
