import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { _Layout } from "./Title";
import DownPolygonIcon from "../images/DownPolygoIcon";
export interface NoticeCompanyListProps {
  listStatus?: string;
  onClick: () => void;
  onWatch: () => void;
  onEdit: () => void;
  list: {
    notice: {
      noticeId: string;
      company: {
        companyNumber: string;
        companyName: string;
        imageList: string[];
      };
      classificationResponse: (
        | {
            bigClassification: {
              bigClassificationName: string;
            };
            name: string;
          }
        | undefined
      )[];
      detailBusinessDescription: string;
      numberOfEmployee: number;
      gradeCutLine: number;
      applicantCount: number;
      isPersonalContact: boolean;
      noticeOpenPeriod: {
        startDate: string;
        endDate: string;
      };
      workPlace: {
        isSameWithCompanyAddress: boolean;
        otherPlace: string;
      };
    };
    approveStatus: "APPROVE" | "WAITING";
  };
}
export const NoticeCompanyList = ({
  listStatus,
  onWatch,
  onEdit,
  list,
  ...props
}: NoticeCompanyListProps) => {
  const [listObject, setListObject] = useState<string | undefined[]>(
    list.notice.classificationResponse?.map((item) => item.name).join(",")
  );
  useLayoutEffect(() => {
    if (list.notice.classificationResponse[0]?.name) {
      setListObject(
        listObject.length > 38 ? `${listObject.slice(0, 35)}...` : listObject
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);
  return (
    <>
      <_Layout>
        <_ListLayout width={4}>
          <_Status listStatus={list.approveStatus ?? listStatus}>
            {(list.approveStatus ?? listStatus) === "WAITING"
              ? "접수요청"
              : (list.approveStatus ?? listStatus) === "APPROVE"
              ? "모집중"
              : "모집종료"}
          </_Status>
        </_ListLayout>
        <_ListLayout width={8}>
          <_Title>
            {list.notice.classificationResponse[0]?.bigClassification
              .bigClassificationName ?? ""}
          </_Title>
        </_ListLayout>
        <_ListLayout width={13}>
          <_Content>{listObject}</_Content>
        </_ListLayout>
        <_ListLayout width={5.5}>
          <_Title>{list.notice.noticeOpenPeriod.startDate}</_Title>
        </_ListLayout>
        <_ListLayout width={6}>
          <_Title>{list.notice.noticeOpenPeriod.endDate}</_Title>
        </_ListLayout>
        <_ListLayout width={4.5}>
          <_Title>{list.notice.numberOfEmployee} 명</_Title>
        </_ListLayout>
        <_ListLayout width={3.5}>
          <_Link>{list.notice.applicantCount} 명</_Link>
        </_ListLayout>
        <_ListLayout width={6} onClick={onEdit}>
          <_Link>모집공고 수정</_Link>
        </_ListLayout>
        <_ListLayout width={5.5} onClick={onWatch}>
          <_Link>모집공고 보기</_Link>
        </_ListLayout>
      </_Layout>
    </>
  );
};
const _ListLayout = styled.div<{ width: number }>`
  width: ${(props) => props.width}rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const _Status = styled.div<{ listStatus: string }>`
  font: 700 0.7rem "Pretendard";
  color: ${(props) =>
    props.listStatus === "WAITING"
      ? props.theme.colors.blue
      : props.listStatus === "APPROVE"
      ? props.theme.colors.black
      : props.theme.colors.red};
`;
const _Title = styled.div`
  font: 700 0.7rem "Pretendard";
  color: ${({ theme }) => theme.colors.black};
`;
const _Content = styled.div`
  font: 700 0.7rem "Pretendard";
  color: ${({ theme }) => theme.colors.black};
`;
const _Link = styled.div`
  font: 700 0.7rem "Pretendard";
  color: ${({ theme }) => theme.colors.blue};
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;

export interface CompanyTitleProps {
  data: { title: string; width: number; key: string }[];
}
export const CompanyTitle = ({ data }: CompanyTitleProps) => {
  return (
    <>
      <_Layout>
        {data.map((item: { title: string; width: number; key: string }) => (
          <>
            <_TitleLayout width={item.width} key={item.key}>
              {item.title}
              <DownPolygonIcon />
            </_TitleLayout>
          </>
        ))}
      </_Layout>
    </>
  );
};
const _TitleLayout = styled.div<{ width: number }>`
  width: ${(props) => props.width}rem;
  font: 700 0.7rem "Pretendadard";
  line-height: 2rem;
`;
