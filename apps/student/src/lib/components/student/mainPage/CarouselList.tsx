import { getCompanyList1Props } from "@/src/axios/dist";
import { useState } from "react";
import styled from "styled-components";

const Carousel = ({ companyList }: { companyList: getCompanyList1Props }) => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <MainDiv>
      <Arrow
        scale={1}
        onClick={() => {
          if (current === 0) setCurrent(companyList.content.length - 1);
          else setCurrent(current - 1);
        }}
      >
        <div>{"<"}</div>
      </Arrow>
      <CarouselDiv>
        {companyList.content.map((t, i) => (
          <Content translateX={current * -66.66}>
            <img src={t.companyIntroductionResponse.companyLogo.fileUrl} />
            <div>
              <h1>{t.companyName}</h1>
              <div>
                <div>
                  <div>직무</div>
                  <span>
                    {t.hiringClassificationList.map((e, i, a) => {
                      return `${e}${i === a.length - 1 ? " " : ", "}`;
                    })}
                    개발자
                  </span>
                </div>
                <br />
                <div>
                  <div>근로자 수</div>
                  <span>{t.workerCount}명</span>
                </div>
                <br />
                <div>
                  <div>사업분야 응용</div>
                  <span>
                    {t.businessTagged.map((e, i, a) => {
                      return `${e.id}${i === a.length - 1 ? " " : ", "}`;
                    })}
                  </span>
                </div>
                <br />
                <div>
                  <div>마지막 모집공고</div>
                  <span>{t.latestNoticeYear}년</span>
                </div>
                <br />
                <div>
                  <div>위치</div>
                  <span>{t.homeAddressInfo.fullAddress}</span>
                </div>
              </div>
              <hr />
              <p>{t.companyIntroductionResponse.introduction}</p>
            </div>
          </Content>
        ))}
      </CarouselDiv>
      <Arrow
        scale={-1}
        onClick={() => {
          if (current < companyList.content.length - 1) setCurrent(current + 1);
          else setCurrent(0);
        }}
      >
        <div>{">"}</div>
      </Arrow>
    </MainDiv>
  );
};
export default Carousel;

const MainDiv = styled.div`
  width: 80vw;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.div<{ scale: number }>`
  cursor: pointer;
  width: 95px;
  height: 95px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-top: -0.5vmax;
    font-size: 50px;
    font-family: "Corben", cursive;
    color: #fff;
  }
`;

const CarouselDiv = styled.div`
  display: inline-flex;
  white-space: nowrap;
  width: 66.66vmax;
  height: 64vmin;
  overflow: hidden;
  position: relative;
  text-align: center;
  overflow-y: hidden;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 24px;
`;

const Content = styled.div<{ translateX: number }>`
  min-width: 66.66vmax;
  height: 64vmin;
  background-color: #fff;
  transition: 1s;
  transform: translateX(${(props) => props.translateX}vmax);
  padding: 1vmax 2vmax;
  display: inline-flex;
  justify-content: space-between;

  img {
    width: 52%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
    padding: 20px;
  }

  > div {
    width: 26.875vmax;

    hr {
      border: none;
      background-color: #241b58;
      height: 1px;
      width: 100%;
      border-radius: 1px;
      margin: 25px 0;
    }

    h1 {
      text-align: left;
      color: #241b58;
      font-size: 2.86vmax;
      margin-bottom: 2.6vmax;
    }

    > p {
      width: 26.875vmax;
      white-space: pre-wrap;
      text-align: left;
      font-size: 1vmax;

      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > div {
      text-align: left;
      font-size: 1vmax;
      > div {
        margin-bottom: 7px;
        display: inline-flex;
        color: #241b58;
        > div {
          width: 8.8vmax;
          font-weight: 600;
        }
        > span {
          font-weight: 400;
          width: 17.7vmax;
          white-space: pre-wrap;
        }
      }
    }
  }
`;
