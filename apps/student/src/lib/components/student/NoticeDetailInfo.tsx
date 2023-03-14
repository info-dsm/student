import {
  getCompanyDetailProps,
  getNoticeDetailProps,
} from "../../../axios/dist";
import React, { useState } from "react";
import styled from "styled-components";
import Checked2 from "../../../../public/assets/images/checked2";

const DetailInfo = ({
  companyInfo,
  subData,
}: {
  companyInfo: getCompanyDetailProps;
  subData: string;
}) => {
  const [current, setCurrent] = useState<number>(0);
  return (
    <>
      <Date>
        <span>
          {companyInfo.isLeading ? (
            <span>
              <Checked2 />
              선도기업
            </span>
          ) : (
            <></>
          )}
          {companyInfo.isAssociated ? (
            <span>
              <Checked2 />
              협력기업
            </span>
          ) : (
            <></>
          )}
        </span>
        <span>
          <span>{subData}</span>
        </span>
      </Date>
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
          companyInfo.companyInformation.agentAddress.fullAddress ? (
            <div>
              <div>지점</div>
              <span>
                {companyInfo.companyInformation.agentAddress.fullAddress}
              </span>
            </div>
          ) : (
            ""
          )}
          <div>
            <div>이메일</div>
            <span>{companyInfo.contactor.email}</span>
          </div>
        </div>
        <Carousel>
          <Arrow
            scale={1}
            onClick={() => {
              if (current === 0)
                setCurrent(
                  companyInfo.companyIntroductionResponse.companyPhotoList
                    .length - 1
                );
              else setCurrent(current - 1);
            }}
          >
            <span>{"<"}</span>
          </Arrow>
          {companyInfo.companyIntroductionResponse.companyPhotoList.map((t) => (
            <span>
              <CarouselImg
                translateX={current * -1000}
                src={t.fileUrl}
                alt="company photo"
                placeholder="blur"
              />
            </span>
          ))}
          <Arrow
            scale={-1}
            onClick={() => {
              if (
                current <
                companyInfo.companyIntroductionResponse.companyPhotoList
                  .length -
                  1
              )
                setCurrent(current + 1);
              else setCurrent(0);
            }}
          >
            <span>{">"}</span>
          </Arrow>
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  span {
    margin-bottom: 7px;
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

  span {
    text-align: center;
  }
`;

const CarouselImg = styled.img<{ translateX: number }>`
  width: 500px;
  height: 280px;
  object-fit: cover;
  transition: 1s;
  transform: translateX(${(props) => props.translateX}px);
`;

const Date = styled.div`
  width: 100%;
  display: inline-flex;
  gap: 24px;
  justify-content: flex-end;
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
      div {
        font-weight: 700;
        width: 114px;
      }
    }
  }
`;
