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
      <HeaderComponent />
      <MainDiv>
        <DetailDiv>
          {info && noticeInfo ? (
            <>
              <Carousel>
                <div
                  onClick={() => {
                    if (current === 0)
                      setCurrent(
                        info.companyIntroductionResponse.companyPhotoList
                          .length - 1
                      );
                    else setCurrent(current - 1);
                  }}
                >
                  {"<"}
                </div>
                {info.companyIntroductionResponse.companyPhotoList.map((t) => (
                  <span>
                    <CarouselImg
                      translateX={current * -1000}
                      src={t.fileUrl}
                      alt="company photo"
                      placeholder="blur"
                    />
                  </span>
                ))}
                <div
                  onClick={() => {
                    if (
                      current <
                      info.companyIntroductionResponse.companyPhotoList.length -
                        1
                    )
                      setCurrent(current + 1);
                    else setCurrent(0);
                  }}
                >
                  {">"}
                </div>
              </Carousel>
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

  div {
    z-index: 2;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    font-weight: 900;
    left: 30px;
    cursor: pointer;
    ~ div {
      left: 940px;
    }
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
