import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { getCompanyDetailProps } from "@/src/axios/dist";

const DetailPageCarousel = ({
  companyInfo,
}: {
  companyInfo: getCompanyDetailProps;
}) => {
  const [current, setCurrent] = useState<number>(0);
  const imageList = [
    companyInfo.companyIntroductionResponse.companyLogo,
  ].concat(companyInfo.companyIntroductionResponse.companyPhotoList);

  return (
    <Carousel>
      {imageList.length === 1 ? (
        <></>
      ) : (
        <Arrow
          scale={1}
          onClick={() => {
            if (current === 0) setCurrent(imageList.length - 1);
            else setCurrent(current - 1);
          }}
        >
          <span>{"<"}</span>
        </Arrow>
      )}
      {imageList.map((t, i) => (
        <span>
          <CarouselImg
            translateX={current * -39.5}
            src={t.fileUrl}
            alt="company photo"
            placeholder="blur"
            object={i === 0}
          />
        </span>
      ))}
      {imageList.length === 1 ? (
        <></>
      ) : (
        <Arrow
          scale={-1}
          onClick={() => {
            if (current < imageList.length - 1) setCurrent(current + 1);
            else setCurrent(0);
          }}
        >
          <span>{">"}</span>
        </Arrow>
      )}
    </Carousel>
  );
};
export default DetailPageCarousel;

const Arrow = styled.div<{ scale: number }>`
  position: absolute;
  z-index: 2;
  top: 40%;
  font-family: "Corben", cursive;
  font-size: 28px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  left: ${(props) => (props.scale === 1 ? 3 : 87)}%;
  border-radius: 50%;
  color: #c5c5c5;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  span {
    position: absolute;
    top: -0.26vmax;
    left: 50%;
    transform: translate(-50%, 0);
    font-family: "Corben", cursive;
  }
`;

const Carousel = styled.div`
  display: inline-flex;
  white-space: nowrap;
  margin-bottom: 40px;
  width: 39.5vmax;
  height: 37vmin;
  overflow-x: hidden;
  position: relative;
  text-align: center;
  overflow-y: hidden;
  border: 2px solid rgba(0, 0, 0, 0.5);

  span {
    text-align: center;
  }
`;

const CarouselImg = styled.img<{ translateX: number; object: boolean }>`
  width: 39.5vmax;
  height: 37vmin;
  object-fit: ${(props) => (props.object ? "contain" : "cover")};
  transition: 1s;
  transform: translateX(${(props) => props.translateX}vmax);
  padding: 30px;
  background-color: #fff;
`;
