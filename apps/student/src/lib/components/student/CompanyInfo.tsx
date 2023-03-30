import NoticeDetailClassification from "./Classification";
import styled from "styled-components";
import { getCompanyDetailProps } from "@/../../packages/api/dist";

const NoticeDetailCompanyInfo = ({
  companyInfo,
}: {
  companyInfo: getCompanyDetailProps;
}) => {
  return (
    <MainDiv>
      <NoticeDetailClassification name={"회사 정보"} />
      <div>{companyInfo.companyIntroductionResponse.introduction}</div>
    </MainDiv>
  );
};

export default NoticeDetailCompanyInfo;

const MainDiv = styled.div`
  margin-top: 100px;

  div {
    margin-top: 40px;
    font-size: 17px;
    white-space: pre-wrap;
  }
`;
