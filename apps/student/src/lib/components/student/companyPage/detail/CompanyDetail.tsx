import styled from "styled-components";
import DetailPageCarousel from "../../detail/Carousel";
import { getCompanyDetailProps } from "@/src/axios/dist";
import { useEffect } from "react";
import CompanyDetailPosition from "./Position";

const CompanyDetail = ({
  companyInfo,
}: {
  companyInfo: getCompanyDetailProps;
}) => {
  console.log(companyInfo);
  return (
    <MainDiv>
      <DetailPageCarousel companyInfo={companyInfo} />
      <h1>{companyInfo.companyName}</h1>
      <IndustryField>
        {companyInfo.businessTagged.map((t) => (
          <>{t.id} </>
        ))}
        <div>채용 포지션 {companyInfo.hiringClassificationList.length}개</div>
      </IndustryField>
      <p>{companyInfo.companyIntroductionResponse.introduction}</p>
      <hr />
      <CompanyDetailPosition companyInfo={companyInfo} />
      <hr />
    </MainDiv>
  );
};
export default CompanyDetail;

const MainDiv = styled.div`
  width: 60%;
  > p {
    margin: 50px 0;
    white-space: pre-wrap;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 40px;
  }

  > hr {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    height: 1px;
  }
`;

const IndustryField = styled.span`
  color: rgba(16, 17, 18, 0.7);
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: 30px;
  > div {
    background-color: #eeeeee;
    color: #6750f8;
    font-weight: 600;
    padding: 7px 16px;
    font-size: 16px;
    border-radius: 8px;
  }
`;
