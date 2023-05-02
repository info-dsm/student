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
          <Content translateX={current * -1280}>
            <img src={t.companyIntroductionResponse.companyLogo.fileUrl} />
            <div>
              <h1>{t.companyName}</h1>
              <div>
                <div>
                  <div>직무</div>
                  <span>프론트엔드 개발자</span>
                </div>
                <br />
                <div>
                  <div>근로자 수</div>
                  <span>13명</span>
                </div>
                <br />
                <div>
                  <div>사업분야 응용</div>
                  <span>소프트웨어 개발</span>
                </div>
                <br />
                <div>
                  <div>설립연도</div>
                  <span>2021년</span>
                </div>
                <br />
                <div>
                  <div>위치</div>
                  <span>서울 관악구 남부순환로 1783 6층</span>
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
`;

const Content = styled.div<{ translateX: number }>`
  min-width: 66.66vmax;
  height: 64vmin;
  background-color: #fff;
  transition: 1s;
  transform: translateX(${(props) => props.translateX}px);
  padding: 52px;
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
    width: 516px;

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
      font-size: 55px;
      margin-bottom: 50px;
    }

    > p {
      width: 516px;
      white-space: pre-wrap;
      text-align: left;
    }

    > div {
      text-align: left;

      > div {
        margin-bottom: 7px;
        display: inline-flex;
        color: #241b58;
        > div {
          width: 169px;
          font-weight: 600;
        }
        > span {
          font-weight: 400;
        }
      }
    }
  }
`;
