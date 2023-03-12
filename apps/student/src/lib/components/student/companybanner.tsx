import Image from "next/image";
import styled from "styled-components";
import BannerImage from "../../../../public/assets/images/main.png";
import { useEffect, useState } from "react";
import { CompanyCount } from "@/src/axios/dist";

const StudentCompanyBanner = () => {
  const [companySize, setCompanySize] = useState<number>(0);
  const date = new Date();
  useEffect(() => {
    CompanyCount().then((res: number) => {
      setCompanySize(res);
    });
  }, []);

  return (
    <>
      <Banner>
        <div>
          이번년도에는 총{" "}
          {companySize.toString().replace(/(?=(\d{3})+(?!\d))/g, ",")}
          개의 <br /> 회사와 MOU를 맺었어요.
        </div>
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 기준
      </Banner>
      <BannerImg>
        <Image src={BannerImage} alt="" />
      </BannerImg>
    </>
  );
};

export default StudentCompanyBanner;

const Banner = styled.div`
  background: linear-gradient(
    180deg,
    rgba(16, 17, 18, 0.2) 4.95%,
    #101112 95.05%
  );
  width: 100vw;
  height: 370px;

  div {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 48px;
    padding-left: 227px;
    line-height: 57.28px;
    font-weight: 700;
    position: relative;
    + div {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 600;
      font-size: 17px;
      top: 40%;
      left: 50%;
    }
  }
`;

const BannerImg = styled.div`
  width: 100vw;
  height: 370px;
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
