import Arrow from "@/public/assets/images/arrow";
import {
  getWaitingNoticeList,
  getWaitingNoticeListContentProps,
} from "@/src/axios/dist";
import { useState } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SwiperImage = () => {
  const [arr, setArr] = useState<getWaitingNoticeListContentProps[]>();

  useEffect(() => {
    getWaitingNoticeList({ idx: 0, size: 6 }).then((res) => {
      setArr(res.content);
    });
  }, []);

  const slide = () => {
    return (
      <>
        {arr?.map((e) => (
          <a href={`/notice/detail/?id=${e.noticeId}`}>
            <img src={e.company.imageList[0]} alt="" />
            <div>
              <h1>
                {e.classificationResponse.map(
                  (t, i, a) =>
                    `  
                      ${t.name}
                      ${a.length - 1 !== i ? ", " : " "}`
                )}
              </h1>
              <h2>{e.company.companyName}</h2>
              <span>채용 인원 {e.numberOfEmployee}명</span>
            </div>
          </a>
        ))}
      </>
    );
  };

  return (
    <MainPage>
      <h1>
        <div>{"모집공고에서\n취업의 기회를 잡아봐요!"}</div>
        <span>
          직군, 자격요건, 회사상황, 전형절차, 복리후생 등 여러 조건을 확인 할 수
          있어요.
        </span>
        <br />
        <a href="/notice/">
          <button>
            <div>맞춤 포지션 더 보기</div>
            <Arrow color="#332D72" />
          </button>
        </a>
      </h1>
      <div>
        <Slide>{slide()}</Slide>
        <Slide>{slide()}</Slide>
      </div>
    </MainPage>
  );
};

export default SwiperImage;

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5850b2;
  /* background-color: #241B58; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
  box-sizing: border-box;

  > h1 {
    padding-top: 13.14vmin;
    padding-left: 18.75vmax;

    > div {
      white-space: pre-wrap;
      font-size: 3.33vmax;
      color: #fff;
    }
    > span {
      color: #ffffff58;
      font-size: 28px;
      font-weight: 500;
    }
    > a > button {
      background-color: #fff;
      width: 12.6vmax;
      height: 5vmin;
      cursor: pointer;
      border-radius: 24px;
      border: none;
      margin-top: 50px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      > div {
        height: 24px;
        display: flex;
        align-items: center;
        font-size: 1vmax;
        color: #332d72;
        font-weight: 700;
      }
    }
  }
  > div {
    width: 150.875vmax;
    display: flex;

    &:hover > div {
      animation-play-state: paused;
    }
  }
`;

const Loop = keyframes`
  100% {
    transform: translateX(-100%);
  }
`;

const Slide = styled.div`
  display: flex;
  animation: ${Loop} 30s linear infinite;

  > a {
    text-decoration: none;
    color: #000;
    width: 25vmax;
    height: 35.83vmin;
    background-color: #fff;
    margin: 0.78125vmax;
    cursor: pointer;
    transition: transform 0.3s ease;
    border-radius: 12px;

    &:hover {
      transform: scale(1.1);
    }

    > img {
      width: 100%;
      height: 60%;
      object-fit: contain;
      padding: 20px;
    }
    > div {
      width: 100%;
      height: 40%;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
      background-color: #fcfcfc;
      border-radius: 0 0 12px 12px;
      padding: 20px 32px;

      > h1 {
        width: 100%;
        margin: 0;
        font-size: 1.3vmax;
        margin-bottom: 4px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      > h2 {
        margin: 0;
        font-size: 1.14vmax;
        font-weight: 500;
        margin-bottom: 1vmin;
      }
      > span {
        font-size: 0.83vmax;
        color: #00000060;
        font-weight: 500;
      }
    }
  }
`;
