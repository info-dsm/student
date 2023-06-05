import styled from "styled-components";
import EmployDict from "./EmployJob";
import { getCompanyDetailProps, getNoticeDetailProps } from "@/src/axios/dist";
import { useState } from "react";
import DetailPageAttachedFile from "./AttachedFile";

const DetailPageCompanyInfo = ({
  companyInfo,
  date,
  noticeInfo,
}: {
  date: string;
  companyInfo: getCompanyDetailProps;
  noticeInfo: {
    id: string[];
    info: getNoticeDetailProps;
  };
}) => {
  const annualSales = `${companyInfo.companyInformation.annualSales}`.replace(
    /(?=(\d{3})+(?!\d))/g,
    ","
  );
  const [apply, setApply] = useState<boolean>(false);

  return (
    <MainDiv>
      <div>
        <h1>
          <span>{companyInfo.companyName.replace(" ", "\n")}</span>
          <span>
            <ApplyBtn apply={apply} onClick={() => setApply(!apply)}>
              {apply
                ? "뒤로"
                : noticeInfo.id.includes(noticeInfo.info.noticeId)
                ? "재지원하기"
                : "지원하기"}
            </ApplyBtn>
            <div>마감일 | {date}</div>
          </span>
        </h1>
        {apply ? (
          <DetailPageAttachedFile noticeInfo={noticeInfo.info} />
        ) : (
          <EmployDict
            width={65}
            data={[
              {
                key: "근로자 수",
                value: `${companyInfo.companyInformation.workerCount}명`,
              },
              {
                key: "사업분야",
                value: `${companyInfo.businessTagged
                  .map((e) => e.id)
                  .join(" ")}`,
              },
              {
                key: "사업자 번호",
                value: companyInfo.companyNumber,
              },
              {
                key: "마지막 모집의뢰 년도",
                value: `${companyInfo.companyInformation.establishedAt}년`,
              },
              {
                key: "연매출액",
                value: `${
                  annualSales[0] === ","
                    ? annualSales.substring(1) + "원"
                    : annualSales === "0"
                    ? "정보 없음"
                    : annualSales + "원"
                }`,
              },
              {
                key: "본사",
                value: companyInfo.companyInformation.homeAddress
                  ? companyInfo.companyInformation.homeAddress.fullAddress
                  : "본사 주소 미기입",
              },
            ]}
          />
        )}
      </div>
    </MainDiv>
  );
};
export default DetailPageCompanyInfo;

const ApplyBtn = styled.button<{ apply: boolean }>`
  cursor: pointer;
  font-size: 18px;
  width: 180px;
  padding: 12px 0;
  background-color: ${(props) => (props.apply ? "transparent" : "#6750f8")};
  border: ${(props) =>
    props.apply ? "2px solid #BABABA" : "2px solid transparent"};
  border-radius: 5px;
  color: ${(props) => (props.apply ? "#BABABA" : "#fff")};
  margin-bottom: 8px;
  transition: all 0.2s ease;
`;

const MainDiv = styled.div`
  position: relative;
  width: 100%;
  margin-left: 40px;
  > div {
    top: 25px;
    position: sticky;
    > h1 {
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
      font-size: 34px;
      > span {
        width: 30%;
        white-space: pre-line;
        > div {
          background-color: #f7f5f5;
          border-radius: 24px;
          padding: 10px 10px;
          color: #6750f8;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
        }
      }
      > span:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
