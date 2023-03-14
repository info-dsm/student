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
              {info.companyIntroductionResponse.companyPhotoList.length ===
              1 ? (
                <img
                  src={
                    info.companyIntroductionResponse.companyPhotoList[0].fileUrl
                  }
                  alt=""
                />
              ) : (
                <>
                  <Carousel>
                    <Arrow
                      scale={1}
                      onClick={() => {
                        if (current === 0)
                          setCurrent(
                            info.companyIntroductionResponse.companyPhotoList
                              .length - 1
                          );
                        else setCurrent(current - 1);
                      }}
                    >
                      <div />
                    </Arrow>
                    {info.companyIntroductionResponse.companyPhotoList.map(
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
                          info.companyIntroductionResponse.companyPhotoList
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
                </>
              )}
              <h1>㈜ {info.companyName}</h1>
              <DetailInfo companyInfo={info} />
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
