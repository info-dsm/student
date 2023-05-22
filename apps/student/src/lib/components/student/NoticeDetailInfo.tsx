import {
  getCompanyDetailProps,
  getNoticeDetailProps,
} from "../../../axios/dist";
import React, { useState } from "react";
import styled from "styled-components";

const DetailInfo = ({
  companyInfo,
}: {
  companyInfo: getCompanyDetailProps;
}) => {
  const [current, setCurrent] = useState<number>(0);
  const imageList = [
    companyInfo.companyIntroductionResponse.companyLogo,
  ].concat(companyInfo.companyIntroductionResponse.companyPhotoList);

  const annualSales = `${companyInfo.companyInformation.annualSales}`.replace(
    /(?=(\d{3})+(?!\d))/g,
    ","
  );

  return (
    <>
      <NoticeInfo>
        <div>
          <div>
            <div>근로자 수</div>
            <span>{companyInfo.companyInformation.workerCount}명</span>
          </div>
          <div>
            <div>사업분야</div>
            <span>
              {companyInfo.businessTagged.map((t) => (
                <>{t.id} </>
              ))}
            </span>
          </div>
          <div>
            <div>사업자 번호</div>
            <span>{companyInfo.companyNumber}</span>
          </div>
          <div>
            <div>설립연도</div>
            <span>{companyInfo.companyInformation.establishedAt}년</span>
          </div>
          <div>
            <div>연매출액</div>
            <span>
              {annualSales[0] === ","
                ? annualSales.substring(1)
                : annualSales === "0"
                ? "정보 없음"
                : annualSales}
              원
            </span>
          </div>
          {companyInfo.companyInformation.homeAddress ? (
            <div>
              <div>본사</div>
              <span>
                {companyInfo.companyInformation.homeAddress.fullAddress}
              </span>
            </div>
          ) : (
            ""
          )}
          {companyInfo.companyInformation.agentAddress &&
          companyInfo.companyInformation.homeAddress &&
          companyInfo.companyInformation.agentAddress.fullAddress &&
          !(
            companyInfo.companyInformation.agentAddress.fullAddress ===
            companyInfo.companyInformation.homeAddress.fullAddress
          ) ? (
            <div>
              <div>지점</div>
              <span>
                {companyInfo.companyInformation.agentAddress.fullAddress}
              </span>
            </div>
          ) : (
            ""
          )}
          {/* <div>
            <div>이메일</div>
            <span>{companyInfo.contactor.email}</span>
          </div> */}
        </div>
        <Carousel>
          {imageList.length === 1 ? (
            <></>
          ) : (
            <Arrow
              scale={1}
              onClick={() => {
                if (current === 0) setCurrent(imageList.length - 1);
                else setCurrent(current - 1);
              }}
            >
              <span>{"<"}</span>
            </Arrow>
          )}
          {imageList.map((t, i) => (
            <span>
              <CarouselImg
                translateX={current * -500}
                src={t.fileUrl}
                alt="company photo"
                placeholder="blur"
                object={i === 0}
              />
            </span>
          ))}
          {imageList.length === 1 ? (
            <></>
          ) : (
            <Arrow
              scale={-1}
              onClick={() => {
                if (current < imageList.length - 1) setCurrent(current + 1);
                else setCurrent(0);
              }}
            >
              <span>{">"}</span>
            </Arrow>
          )}
        </Carousel>
      </NoticeInfo>
    </>
  );
};

export default DetailInfo;

const Arrow = styled.div<{ scale: number }>`
  position: absolute;
  z-index: 2;
  top: 40%;
  font-family: "Corben", cursive;
  font-size: 28px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  left: ${(props) => (props.scale === 1 ? 3 : 87)}%;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  span {
    position: absolute;
    top: -0.26vmax;
    left: 50%;
    transform: translate(-50%, 0);
    font-family: "Corben", cursive;
  }
`;

const Carousel = styled.div`
  display: inline-flex;
  white-space: nowrap;
  width: 500px;
  height: 280px;
  overflow-x: hidden;
  position: relative;
  text-align: center;
  overflow-y: hidden;
  border: 2px solid rgba(0, 0, 0, 0.5);

  span {
    text-align: center;
  }
`;

const CarouselImg = styled.img<{ translateX: number; object: boolean }>`
  width: 500px;
  height: 280px;
  object-fit: ${(props) => (props.object ? "contain" : "cover")};
  transition: 1s;
  transform: translateX(${(props) => props.translateX}px);
`;

const NoticeInfo = styled.div`
  margin-top: 40px;
  display: inline-flex;
  gap: 50px;

  > div {
    margin-top: 40px;
    font-size: 17px;
    > div {
      margin-bottom: 16px;
      display: flex;
      font-weight: 500;
      align-items: center;
      span {
        width: 90%;
      }
      div {
        font-weight: 700;
        width: 114px;
      }
    }
  }
`;
