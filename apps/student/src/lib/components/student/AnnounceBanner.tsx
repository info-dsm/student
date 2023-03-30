import { NoticeCount } from "@/src/axios/dist";
import Image from "next/image";
import styled from "styled-components";
import BannerImage from "../../../../public/assets/images/main.png";
import { useState, useEffect } from "react";

const StudentAnnounceBanner = ({ number }: { number: number }) => {
  const date = new Date();

  return (
    <>
      <Banner>
        <div>
          현재 총 {number.toString().replace(/(?=(\d{3})+(?!\d))/g, ",")}
          개의 <br /> 공지가 있어요
        </div>
        <div>
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 기준
        </div>
      </Banner>
      <BannerImg>
        <Image src={BannerImage} alt="" />
      </BannerImg>
    </>
  );
};

export default StudentAnnounceBanner;

const Banner = styled.div`
  background: linear-gradient(
    180deg,
    rgba(16, 17, 18, 0.2) 4.95%,
    #101112 95.05%
  );
  width: 100vw;
  height: 39.4vmin;

  div {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    font-size: 2.5vmax;
    font-weight: 700;
    position: relative;
    + div {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 600;
      font-size: 0.88vmax;
      top: 40%;
      left: 50%;
    }
  }
`;

const BannerImg = styled.div`
  width: 100vw;
  height: 39.4vmin;
  position: absolute;
  top: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }
`;
