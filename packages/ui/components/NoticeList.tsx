import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { _Layout, _CheckBox } from "./Title";
export interface NoticeListProps {
  listStatus?: string;
  checked: boolean;
  onChange: () => void;
  onClick: () => void;
  onWatch: () => void;
  onEdit: () => void;
  list: {
    noticeId: string;
    company: {
      companyNumber: string;
      companyName: string;
    };
    classificationResponse: {
      bigClassification: {
        bigClassificationName: string;
      };
      name: string;
    }[];
    numberdetailBusinessDescription: string;
    numberOfEmployee: number;
    gradeCutLine: number;
    applicantCount: number;
    isPersonalContact: boolean;
    noticeOpenPeriod: {
      startDate: string;
      endDate: string;
    };
    approveStatus?: "WAITING" | "APPROVE";
  };
}
export const NoticeList = ({
  listStatus,
  onWatch,
  onEdit,
  list,
  ...props
}: NoticeListProps) => {
  const [listObject, setListObject] = useState<{
    companyName: string;
    smallCllassification: string;
  }>({
    companyName: list.company.companyName,
    smallCllassification: list.classificationResponse
      .map((item) => item.name)
      .join(","),
  });
  useLayoutEffect(() => {
    setListObject({
      companyName:
        listObject.companyName.length > 15
          ? `${listObject.companyName.slice(0, 12)}...`
          : listObject.companyName,
      smallCllassification:
        listObject.smallCllassification.length > 28
          ? `${listObject.smallCllassification.slice(0, 25)}...`
          : listObject.smallCllassification,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <_Layout>
        <_CheckBox type={"checkbox"} {...props} />
        <_ListLayout width={3.5}>
          <_Status listStatus={list.approveStatus ?? listStatus}>
            {list.approveStatus ?? listStatus === "WAITING"
              ? "접수요청"
              : list.approveStatus ?? listStatus === "APPROVE"
              ? "모집중"
              : "모집종료"}
          </_Status>
        </_ListLayout>
        <_ListLayout width={5.5}>
          <_Title>{listObject.companyName}</_Title>
        </_ListLayout>
        <_ListLayout width={5.5}>
          <_Title>
            {list.classificationResponse[0]?.bigClassification
              .bigClassificationName ?? ""}
          </_Title>
        </_ListLayout>
        <_ListLayout width={8.5}>
          <_Content>{listObject.smallCllassification}</_Content>
        </_ListLayout>
        <_ListLayout width={5.5}>
          <_Title>{list.noticeOpenPeriod.startDate}</_Title>
        </_ListLayout>
        <_ListLayout width={6}>
          <_Title>{list.noticeOpenPeriod.endDate}</_Title>
        </_ListLayout>
        <_ListLayout width={4.5}>
          <_Title>{list.numberOfEmployee} 명</_Title>
        </_ListLayout>
        <_ListLayout width={3}>
          <_Link>{list.applicantCount} 명</_Link>
        </_ListLayout>
        <_ListLayout width={5.5} onClick={onEdit}>
          <_Link>모집공고 수정</_Link>
        </_ListLayout>
        <_ListLayout width={5.5}>
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
