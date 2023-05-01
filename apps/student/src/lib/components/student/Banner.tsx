import styled from "styled-components";
import Image from "next/image";
import MainImage from "../../../../public/assets/images/main.png";
import ArrowText from "./Arrow";
import { useEffect, useState } from "react";
import { NoticeCount } from "@/src/axios/dist";
import { frameRate, totalFrame } from "@/public/data";
import { AnnouncementList } from "@/src/axios/dist";
import { AnnouncementListProps } from "@/src/axios/dist";

const StudentBanner = () => {
  const [noticeSize, setNoticeSize] = useState<number>(0);
  const [announcement, setAnnounce] = useState<AnnouncementListProps>();

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

    AnnouncementList({ idx: 0, size: 6, type: "전체" }).then((res) => {
      setAnnounce(res);
    });
  }, []);

  return (
    <MainDiv>
      <Banner>
        <div>
          현재 총 {noticeSize.toString().replace(/(?=(\d{3})+(?!\d))/g, ",")}
          개의 <br /> 모집공고가 있어요.
        </div>
        <ArrowText text={"모집공고 보러가기"} link={"notice"} />
        <Notice>
          <div>
            <div>공지사항</div>
            <div>
              {announcement?.content.map((e, i) => (
                <div>
                  <span>{e.title}</span>
                  <span>{e.createdAt.substring(0, 10)}</span>
                </div>
              ))}
            </div>
          </div>
        </Notice>
      </Banner>
      <BannerImg>
        <Image src={MainImage} alt="" />
      </BannerImg>
    </MainDiv>
  );
};

export default StudentBanner;

const MainDiv = styled.div`
  * {
    font-family: "Pretendard Variable";
  }
`;

const Notice = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 42.6vmin;
  > div {
    width: 1280px;
    height: 336px;
    background-color: rgba(9, 5, 38, 0.4);
    border-radius: 30px;
    padding: 27px 31px;
    display: flex;
    flex-direction: column;
    > div:nth-child(1) {
      font-size: 28px;
      color: #fff;
      width: 100%;
      text-align: left;
      display: flex;
      margin-bottom: 17px;
    }
    > div:nth-child(2) {
      width: 100%;
      display: flex;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 11px;
      div {
        background-color: rgba(255, 255, 255, 0.85);
        border-radius: 12px;
        padding: 19px 21px;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        > span:nth-child(1) {
          width: 440px;
          font-size: 23px;
          font-weight: 500;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        > span:nth-child(2) {
          font-size: 16px;
          color: #000;
          opacity: 0.4;
        }
      }
    }
  }
`;

const Banner = styled.div`
  scroll-snap-align: start;
  background: linear-gradient(180deg, rgba(16, 17, 18, 0.2) 0%, #241c58 95%);
  width: 100vw;
  height: 100vh;
  position: relative;

  > div:nth-child(1) {
    left: 50%;
    top: 37%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    font-size: 3.1vmax;
    font-weight: 600;
    position: relative;
  }

  > span {
    top: 47%;
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
    object-position: 0 20%;
  }
`;
