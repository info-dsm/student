import styled from "styled-components";
import Image from "next/image";
import MainImage from "../../../../public/assets/images/main.png";
import ArrowText from "./Arrow";
import { useEffect, useState } from "react";
import { NoticeCount } from "@/src/axios/dist";
import { frameRate, totalFrame } from "@/public/data";

const StudentBanner = () => {
  const [noticeSize, setNoticeSize] = useState<number>(0);

  useEffect(() => {
    NoticeCount().then((res: number) => {
      let currentNumber = 0;
      const counter = setInterval(() => {
        const progress = ++currentNumber / totalFrame;
        setNoticeSize(Math.round(res * progress));

        if (progress === 1) {
          clearInterval(counter);
        }
      }, frameRate);
    });
  }, []);

  return (
    <>
      <Banner>
        <div>
          현재 총 {noticeSize.toString().replace(/(?=(\d{3})+(?!\d))/g, ",")}
          개의 <br /> 모집공고가 있어요.
        </div>
        <ArrowText text={"모집공고 둘러보기"} link={"notice"} />
      </Banner>
      <BannerImg>
        <Image src={MainImage} alt="" />
      </BannerImg>
    </>
  );
};

export default StudentBanner;

const Banner = styled.div`
  scroll-snap-align: start;
  background: linear-gradient(
    180deg,
    rgba(16, 17, 18, 0.2) 4.95%,
    #101112 95.05%
  );
  width: 100vw;
  height: 100vh;
  position: relative;

  div {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    font-size: 2.5vmax;
    line-height: 2.98vmax;
    font-weight: 700;
    position: relative;
  }

  > span {
    top: 59%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const BannerImg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-y: hidden;
  top: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
