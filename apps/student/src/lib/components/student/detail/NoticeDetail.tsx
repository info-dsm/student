import styled from "styled-components";
import DetailPageCarousel from "./Carousel";
import EmployProcess from "./EmployProcess";
import EmployDict from "./EmployJob";
import DetailPageBenefit from "./Benefit";
import { getCompanyDetailProps, getNoticeDetailProps } from "@/src/axios/dist";
import NoticeDetailClassification from "../Classification";
import CompanyDetailPosition from "../companyPage/detail/Position";

const NoticeDetail = ({
  noticeInfo,
  companyInfo,
}: {
  noticeInfo: getNoticeDetailProps;
  companyInfo: getCompanyDetailProps;
}) => {
  return (
    <MainDiv>
      <DetailPageCarousel companyInfo={companyInfo} />
      <NoticeDetailClassification name={"회사 정보"} />
      <CompanyInfoContent>
        {companyInfo.companyIntroductionResponse.introduction}
      </CompanyInfoContent>
      <DividingLine />
      <NoticeDetailClassification name={"채용직무"} />
      <EmployDict
        width={85}
        data={[
          {
            key: "직무",
            value: noticeInfo.classificationResponse
              .map((e) => e.name)
              .join(" "),
          },
          {
            key: "채용인원",
            value: `${noticeInfo.numberOfEmployee}명`,
          },
          {
            key: "근무시간",
            value: `${noticeInfo.workTime.workTimePerDay}시간`,
          },
          {
            key: "근무지",
            value: `${
              noticeInfo.workPlace.isSameWithCompanyAddress
                ? `${companyInfo.companyInformation.homeAddress?.fullAddress}`
                : noticeInfo.workPlace.otherPlace
            }`,
          },
          {
            key: "상세직무",
            value: `${noticeInfo.detailBusinessDescription}`,
          },
        ]}
      />
      <DividingLine />
      <NoticeDetailClassification name={"채용절차"} />
      <EmployProcess process={Object.values(noticeInfo.interviewProcessList)} />
      <DividingLine />
      <NoticeDetailClassification name={"자격조건"} />
      <EmployDict
        width={85}
        data={[
          {
            key: "기술 스택",
            value: `${
              noticeInfo.languageList.length > 0 ||
              noticeInfo.technologyList.length > 0
                ? `${noticeInfo.languageList
                    .map((t) => `• ${t.languageName}`)
                    .join("\n")}` +
                  `${noticeInfo.technologyList
                    .map((t) => `• ${t.technologyName}`)
                    .join("\n")}`
                : "필요한 기술 스택이 없습니다."
            }`,
          },
          {
            key: "자격증",
            value: `${
              noticeInfo.certificateList.length > 0
                ? `${noticeInfo.certificateList
                    .map((t, i) => `• ${t.certificateName}`)
                    .join("\n")}`
                : "필요한 자격증이 없습니다."
            }`,
          },
          {
            key: "성적",
            value: `${
              noticeInfo.gradeCutLine === null || noticeInfo.gradeCutLine === 0
                ? "무관"
                : `${noticeInfo.gradeCutLine}% 이내`
            }`,
          },
          {
            key: "우대사항",
            value: `${
              noticeInfo.otherFeatures
                ? noticeInfo.otherFeatures
                : "우대사항이 없습니다."
            }`,
          },
        ]}
      />
      <DividingLine />
      <NoticeDetailClassification name={"복리후생"} />
      <DetailPageBenefit info={noticeInfo} />
      <DividingLine />
      <CompanyDetailPosition companyInfo={companyInfo} />
      <DividingLine />
    </MainDiv>
  );
};
export default NoticeDetail;

const MainDiv = styled.div`
  width: 60%;
`;

const DividingLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  margin-top: 40px;
  margin-bottom: 42px;
`;

const CompanyInfoContent = styled.div`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 300;
  white-space: pre-wrap;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  /* border-left: 3px solid #6750f8;
  padding-left: 7px; */
`;
