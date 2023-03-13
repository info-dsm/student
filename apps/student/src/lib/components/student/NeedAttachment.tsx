import React from "react";
import { getNoticeDetailProps } from "../../../axios/dist";
import NoticeDetailClassification from "./Classification";
import styled from "styled-components";
import Image from "next/image";
import DownLoadImg from "@/public/assets/images/download.png";
import Link from "next/link";

const NeedAttachment = ({
  noticeInfo,
}: {
  noticeInfo: getNoticeDetailProps;
}) => {
  return (
    <MainDiv>
      <NoticeDetailClassification name={"이력서"} />
      {noticeInfo.needAttachment !== "" ? (
        <>
          {noticeInfo.needAttachment.split(",").map((t) => (
            <div>• {t}</div>
          ))}
        </>
      ) : (
        <div>서류가 필요하지 않습니다.</div>
      )}
    </MainDiv>
  );
};
export default NeedAttachment;

const MainDiv = styled.div`
  margin-top: 120px;

  div {
    margin-top: 30px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.black};
    
  }
`;
