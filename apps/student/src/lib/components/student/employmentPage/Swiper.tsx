import { getEmploymentClassProps } from "@/src/axios/dist";
import styled, { keyframes } from "styled-components";

const Swiper = ({ classInfo }: { classInfo: getEmploymentClassProps }) => {
  const duration = classInfo.employmentList.length;
  const slide = () => {
    return (
      <>
        {classInfo.employmentList.map((e) => (
          <div>
            <img src={e.company.companyLogo} alt="company logo" />
            <div>
              <div>{e.company.companyName}</div>
              <span>{e.company.companyNumber}</span>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <SwiperDiv>
      <Slide duration={duration}>{slide()}</Slide>
      <Slide duration={duration}>{slide()}</Slide>
      <Slide duration={duration}>{slide()}</Slide>
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

const Slide = styled.div<{ duration: number }>`
  display: flex;
  animation: ${Loop} ${(props) => props.duration * 3.5}s linear infinite;
  > div {
    width: 15.625vmax;
    height: 15vmin;
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.1);
    margin: 15px;
    border-radius: 12px;
    padding: 16px;
    display: inline-flex;
    img {
      height: 100%;
      width: 48%;
      object-fit: contain;
      border-radius: 12px;
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      padding: 8px;
    }
    > div {
      padding: 10px;
      div {
        font-size: 1.1vmax;
        font-weight: 700;
      }
    }
    span {
      font-size: 0.78vmax;
      color: #1011127f;
    }
  }
`;
