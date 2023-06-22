import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  getCompanyDetail,
  getCompanyDetailProps,
  getCompanyNotice,
  getWaitingNoticeListContentProps,
} from "../../../axios/dist";
import { useRouter } from "next/router";
import { Spinner } from "@/../../packages/ui/dist";
import DetailPageCompanyInfo from "@/src/lib/components/student/detail/CompanyInfo";
import CompanyDetail from "@/src/lib/components/student/companyPage/detail/CompanyDetail";

const StudentCompanyDetail = ({}: {}) => {
  const query = useRouter().query.id as string;
  const [info, setInfo] = useState<getCompanyDetailProps>();
  const [noticeInfo, setNoticeInfo] =
    useState<getWaitingNoticeListContentProps[]>();

  useEffect(() => {
    if (query) {
      getCompanyDetail({ id: query }).then((res: getCompanyDetailProps) =>
        setInfo(res)
      );
      getCompanyNotice({ id: query }).then(
        (res: getWaitingNoticeListContentProps[]) => setNoticeInfo(res)
      );
    }
  }, [query]);

  return (
    <>
      {info && noticeInfo ? (
        <>
          <MainDiv>
            <CompanyDetail companyInfo={info} />
          </MainDiv>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StudentCompanyDetail;

const MainDiv = styled.div`
  padding: 7.1vmax 25.15vmin;
  display: flex;
  position: relative;

  * {
    font-family: "Pretendard Variable";
  }
`;
