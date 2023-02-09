import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { _Layout, _CheckBox } from "./Title";
export interface ListProps {
  checked: boolean;
  onChange: () => void;
  list: {
    companyNumber: string;
    contactorEmail: string;
    companyName: string;
    homeAddressInfo: {
      fullAddress: string;
      addressNumber: string;
    };
    businessTagged: {
      name: string;
    }[];
    workerCount: number;
    annualSales: bigint;
    isLeading: boolean;
    isAssociated: boolean;
    latestNoticeYear?: number;
    totalEmployedCount: number;
    companyIntroductionResponse: {
      introduction: string;
      businessCertificate: {
        fileId: string;
        fileUrl: string;
        fileType: string;
        extension: string;
        fileName: string;
        companyNumber: string;
        companyFileClassificationType: string;
      };
      companyIntroductionFile: {
        fileId: string;
        fileUrl: string;
        fileType: string;
        extension: string;
        fileName: string;
        companyNumber: string;
        companyFileClassificationType: string;
      }[];
      companyLogo: {
        fileId: string;
        fileUrl: string;
        fileType: string;
        extension: string;
        fileName: string;
        companyNumber: string;
        companyFileClassificationType: string;
      };
      companyPhotoList: {
        fileId: string;
        fileUrl: string;
        fileType: string;
        extension: string;
        fileName: string;
        companyNumber: string;
        companyFileClassificationType: string;
      }[];
    };
  };
  onClick: () => void;
  onWrite: () => void;
  onWatch: () => void;
}
export const List = ({
  list,
  onClick,
  onWatch,
  onWrite,
  ...props
}: ListProps) => {
  const [listObject, setListObject] = useState<{
    address: string;
    tag: string;
  }>({
    address: list.homeAddressInfo.fullAddress,
    tag: list.businessTagged.map((item) => item.name).join(","),
  });
  useLayoutEffect(() => {
    setListObject({
      address:
        listObject.address.length > 20
          ? `${listObject.address.slice(0, 17)}...`
          : listObject.address,
      tag:
        listObject.tag.length > 28
          ? `${listObject.tag.slice(0, 25)}...`
          : listObject.tag,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <_Layout>
        <_CheckBox type={"checkbox"} {...props} />
        <_ListLayout width={8}>
          <_Img src={list.companyIntroductionResponse.companyLogo.fileUrl} />
          <_CompanyName>{list.companyName}</_CompanyName>
        </_ListLayout>
        <_ListLayout width={7}>
          <_CompanySmall>{listObject.address}</_CompanySmall>
        </_ListLayout>
        <_ListLayout width={7.5}>
          <_CompanySmall>{listObject.tag}</_CompanySmall>
        </_ListLayout>
        <_ListLayout width={5.5}>
          <_CompanyLeading bool={list.isLeading}>
            {list.isLeading ? "선도" : "참여"}기업
          </_CompanyLeading>
        </_ListLayout>
        <_ListLayout width={4.5}>
          <_CompanyLeading bool={list.isAssociated}>
            {list.isAssociated ? "Y" : "N"}
          </_CompanyLeading>
        </_ListLayout>
        <_ListLayout width={4.5} {...{ onClick }}>
          <_Link>{list.totalEmployedCount} 명</_Link>
        </_ListLayout>
        <_ListLayout width={5.5}>
          <_Link>모집공고 등록</_Link>
        </_ListLayout>
        <_ListLayout width={5.5}>
          <_Link>회사정보 보기</_Link>
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
const _Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;
const _CompanySmall = styled.div`
  font: 500 0.6rem "Pretendard";
  text-overflow: ellipsis;
  overflow: hidden;
`;
const _CompanyName = styled.div`
  width: auto;
  font: 500 0.7rem "Pretendard";
  text-overflow: ellipsis;
  overflow: hidden;
`;
const _CompanyLeading = styled.div<{ bool: boolean }>`
  font: 500 0.7rem "Pretendard";
  color: ${(props) =>
    props.bool ? props.theme.colors.black : props.theme.colors.red};
`;
const _Link = styled.div`
  text-align: center;
  font: 700 0.7rem "Pretendard";
  color: ${({ theme }) => theme.colors.blue};
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;
