import {
  getCompanyDetailProps,
  getWaitingNoticeListContentProps,
} from "@/src/axios/dist";
import styled from "styled-components";
import CompanyPageNoticeBox from "./Notice";

const CompanyPageNotice = ({
  companyInfo,
  noticeInfo,
}: {
  companyInfo: getCompanyDetailProps;
  noticeInfo: getWaitingNoticeListContentProps[];
}) => {
  return (
    <MainDiv>
      <div>
        <h2>채용중인 포지션</h2>
        <CompanyPageNoticeBox info={noticeInfo}/>
      </div>
    </MainDiv>
  );
};
export default CompanyPageNotice;

const MainDiv = styled.div`
  position: relative;
  width: 100%;
  margin-left: 40px;
  > div {
    top: 60px;
    position: sticky;
    >h2 {
      font-size: 26px;
    }
  }
`;
