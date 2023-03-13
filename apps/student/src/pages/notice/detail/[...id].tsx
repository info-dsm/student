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

const NoticeDetail = () => {
  const query = useRouter().query.id as string;
  const [NoticeInfo, setNoticeInfo] = useState<getNoticeDetailProps>();
  const [CompanyInfo, setCompanyInfo] = useState<getCompanyDetailProps>();
  const [NoticeID, setNoticeID] = useState<string[]>([]);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (query) {
      getNoticeDetail({ id: query }).then((res: getNoticeDetailProps) => {
        setNoticeInfo(res);
        console.log(res);
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
      setNoticeID(res.map((e) => e.noticeId));
    });
  };

  return (
    <>
      <HeaderComponent />
      <MainDiv>
        {NoticeInfo && CompanyInfo ? (
          <DetailDiv>
            <Carousel>
              <Arrow
                scale={1}
                onClick={() => {
                  if (current === 0)
                    setCurrent(
                      CompanyInfo.companyIntroductionResponse.companyPhotoList
                        .length - 1
                    );
                  else setCurrent(current - 1);
                }}
              >
                <div />
              </Arrow>
              {CompanyInfo.companyIntroductionResponse.companyPhotoList.map(
                (t) => (
                  <span>
                    <CarouselImg
                      translateX={current * -1000}
                      src={t.fileUrl}
                      alt="company photo"
                      placeholder="blur"
                    />
                  </span>
                )
              )}
              <Arrow
                scale={-1}
                onClick={() => {
                  if (
                    current <
                    CompanyInfo.companyIntroductionResponse.companyPhotoList
                      .length -
                      1
                  )
                    setCurrent(current + 1);
                  else setCurrent(0);
                }}
              >
                <div />
              </Arrow>
            </Carousel>
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
            <ApplyBtn
              href={"#resume"}
              point={NoticeID.includes(NoticeInfo.noticeId)}
            >
              <div>지원자 수 {NoticeInfo.applicantCount}명</div>
              <label
                style={{
                  cursor: `${
                    NoticeID.includes(NoticeInfo.noticeId) ? "auto" : "pointer"
                  }`,
                }}
              >
                {NoticeID.includes(NoticeInfo.noticeId)
                  ? "지원완료"
                  : "지원하기"}
              </label>
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
            <Portpoilo noticeInfo={NoticeInfo} />
            <NeedAttachment noticeInfo={NoticeInfo}/>
            <Attachment NoticeID={NoticeID} NoticeInfo={NoticeInfo} />
          </DetailDiv>
        ) : (
          <></>
        )}
      </MainDiv>
      <Footer />
    </>
  );
};

export default NoticeDetail;

const Arrow = styled.div<{ scale: number }>`
  position: absolute;
  z-index: 2;
  top: 50%;
  cursor: pointer;
  width: 80px;
  height: 80px;
  left: ${(props) => (props.scale === 1 ? 3 : 90)}%;
  transform: scale(${(props) => props.scale}, 1);
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  div {
    width: 30px;
    height: 60px;
    margin-top: 12px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='22' viewBox='0 0 14 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.8799 18.6126L5.86488 10.5801L13.8799 2.54758L11.4124 0.0800781L0.912383 10.5801L11.4124 21.0801L13.8799 18.6126Z' fill='%23242424'/%3E%3C/svg%3E%0A");
    transition: all 0.2s ease;
  }
`;

const Carousel = styled.div`
  display: inline-flex;
  white-space: nowrap;
  width: 1000px;
  height: 600px;
  overflow-x: hidden;
  position: relative;
  text-align: center;
  overflow-y: hidden;

  span {
    text-align: center;
  }
`;

const CarouselImg = styled.img<{ translateX: number }>`
  width: 1000px;
  height: 600px;
  object-fit: contain;
  transition: 1s;
  transform: translateX(${(props) => props.translateX}px);
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
