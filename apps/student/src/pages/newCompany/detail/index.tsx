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
import CompanyInfo from "@/src/lib/components/student/detail/NoticeDetail";

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
          <MainDiv>{/* <CompanyInfo info={info} /> */}</MainDiv>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StudentCompanyDetail;

const MainDiv = styled.div`
  padding: 137px 320px;
`;
