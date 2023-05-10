import { useState } from "react";
import styled from "styled-components";
import Carousel from "./CarouselList";
import { useEffect } from "react";
import {
  getCompanyCustom,
  getCompanyList1,
  getCompanyList1Props,
  getCompanyPreference,
} from "@/src/axios/dist";
const CompanyCarousel = ({ fix }: { fix: boolean }) => {
  const [companyList, setCompanyList] = useState<getCompanyList1Props>();
  const [companyPreference, setCompanyPreference] = useState<string>();

  useEffect(() => {
    getCompanyPreference().then((res) => {
      setCompanyPreference(res);
    });
  }, []);

  useEffect(() => {
    if (!(typeof companyPreference === "undefined")) {
      if (typeof companyPreference === "string" && companyPreference.length > 0)
        getCompanyCustom().then((res) => {
          setCompanyList(res);
        });
      else
        getCompanyList1({ idx: 0, size: 6 }).then((res) => {
          setCompanyList(res);
        });
    }
  }, [companyPreference, fix]);

  return (
    <MainDiv>
      <div>
        <h1>
          <div>요즘 떠오르고있는 기업이에요!</div>
          <span>규모가 ‘스타트업’인 회사들을 모아 추천드려요.</span>
        </h1>
        {companyList ? <Carousel companyList={companyList} /> : <></>}
      </div>
    </MainDiv>
  );
};
export default CompanyCarousel;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #241b58;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 100px 0;

  h1 {
    text-align: center;
    div {
      font-size: 3.33vmax;
      color: #fff;
    }
    span {
      font-size: 1.45vmax;
      color: #ffffff99;
    }
  }
  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
