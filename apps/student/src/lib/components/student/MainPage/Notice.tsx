import Arrow from "@/public/assets/images/arrow";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const SwiperImage = () => {
  const [move, setMove] = useState<number>(0);
  const [arr, setArr] = useState<number[]>(
    Array.from({ length: 6 }, (_, i) => {
      return i;
    })
  );
  useEffect(() => {
    let beforeNumber = 0;
    let cnt = 1;
    let beforeArr = Array.from({ length: 6 }, (_, i) => {
      return i;
    });
    // const counter = setInterval(() => {
    //   const currentNumber = ++beforeNumber;
    //   setMove(currentNumber);
    //   if (cnt * 510 <= currentNumber) {
    //     beforeArr = beforeArr.concat([7]);
    //     setArr(beforeArr);
    //     cnt += 1;
    //   }
    // }, 30);
  }, []);

  return (
    <MainPage>
      <h1>
        <div>{"모집공고에서\n취업의 기회를 잡아봐요!"}</div>
        <span>
          직군, 자격요건, 회사상황, 전형절차, 복리후생 등 여러 조건을 확인 할 수
          있어요.
        </span>
        <br />
        <button>
          <div>맞춤 포지션 더 보기</div>
          <Arrow color="#332D72" />
        </button>
      </h1>
      <div>
        <Slide move={move}>
          {arr.map((e) => (
            <div>{e}</div>
          ))}
        </Slide>
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

  * {
    font-family: "Pretendard Variable";
  }

  > h1 {
    padding-top: 13.14vmin;
    padding-left: 360px;

    > div {
      white-space: pre-wrap;
      font-size: 64px;
      color: #fff;
    }
    > span {
      color: #ffffff58;
      font-size: 28px;
      font-weight: 500;
    }
    > button {
      background-color: #fff;
      width: 242px;
      height: 54px;
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
        font-size: 20px;
        color: #332d72;
        font-weight: 700;
      }
    }
  }
`;

const Slide = styled.div<{ move: number }>`
  display: inline-flex;
  gap: 30px;
  transform: translateX(-${(props) => props.move}px);
  div {
    width: 480px;
    height: 387px;
    background-color: red;
  }
`;
