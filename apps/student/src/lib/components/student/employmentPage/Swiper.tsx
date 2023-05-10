import { getEmploymentClassProps } from "@/src/axios/dist";
import styled, { keyframes } from "styled-components";

const Swiper = ({ classInfo }: { classInfo: getEmploymentClassProps }) => {
  const slide = () => {
    return (
      <>
        {classInfo.employmentList.map((e) => (
          <div>
            <img src={e.comapny.companyLogo} alt="company logo" />
            <div>
              <div>{e.comapny.companyName}</div>
              <span>{e.comapny.companyNumber}</span>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <SwiperDiv>
      <Slide>{slide()}</Slide>
      <Slide>{slide()}</Slide>
      <Slide>{slide()}</Slide>
    </SwiperDiv>
  );
};
export default Swiper;

const Loop = keyframes`
  100% {
    transform: translateX(-100%);
  }
`;

const SwiperDiv = styled.div`
  width: 100vw;
  display: flex;
  margin-top: 10px;
`;

const Slide = styled.div`
  display: flex;
  animation: ${Loop} 13s linear infinite;
  > div {
    width: 300px;
    height: 150px;
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.1);
    margin: 15px;
    border-radius: 12px;
    padding: 16px;
    display: inline-flex;
    img {
      height: 100%;
      width: 48%;
    }
    > div {
      padding: 10px;
      div {
        font-size: 22px;
        font-weight: 700;
      }
    }
    span {
      font-size: 15px;
      color: #1011127f;
    }
  }
`;
