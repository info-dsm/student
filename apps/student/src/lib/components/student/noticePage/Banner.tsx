import { NoticeCount } from "@/src/axios/dist";
import Image from "next/image";
import styled from "styled-components";
import BannerImage from "../../../../../public/assets/images/main.png";
import { useState, useEffect } from "react";
import { frameRate, totalFrame } from "@/public/data";
import { TagNameType } from "@/src/lib/types";

const StudentNoticeBanner = ({
  name,
}: {
  name: {
    state: TagNameType;
    setState: (value: TagNameType) => void;
  };
}) => {
  const date = new Date();
  const [noticeSize, setNoticeSize] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    name.setState({ ...name.state, ["companyName"]: search });
  };

  return (
    <>
      <Banner
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <div>
          현재 총 {noticeSize.toString().replace(/(?=(\d{3})+(?!\d))/g, ",")}
          개의 <br /> 모집공고가 있어요
        </div>
        <div>
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 기준
        </div>
        <input
          placeholder="기업, 취업 공고를 검색해보세요."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Banner>
      <BannerImg>
        <Image src={BannerImage} alt="" />
      </BannerImg>
    </>
  );
};

export default StudentNoticeBanner;

const Banner = styled.form`
  background: linear-gradient(
    180deg,
    rgba(16, 17, 18, 0.2) 4.95%,
    #101112 95.05%
  );
  width: 100vw;
  height: 45.4vmin;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12.8vmin;

  div {
    color: #fff;
    font-size: 2.5vmax;
    font-weight: 700;
    + div {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 600;
      font-size: 0.88vmax;
      top: 40%;
      left: 50%;
    }
  }

  > input {
    width: 50%;
    height: 6.4vmin;
    margin-top: 5.4vmin;
    background-color: #f5f2f2;
    border: none;
    border-radius: 40px;
    padding-left: 40px;
    font-size: 1rem;
  }
`;

const BannerImg = styled.div`
  width: 100vw;
  height: 45.4vmin;
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
