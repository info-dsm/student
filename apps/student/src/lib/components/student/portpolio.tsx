import React from "react";
import { getNoticeDetailProps } from "../../../axios/dist";
import NoticeDetailClassification from "./Classification";
import styled from "styled-components";
import Image from "next/image";
import DownLoadImg from "@/public/assets/images/download.png";
import Link from "next/link";

const Portpoilo = ({ noticeInfo }: { noticeInfo: getNoticeDetailProps }) => {
  return (
    <MainDiv>
      <NoticeDetailClassification name={"이력서"} />
      {noticeInfo.attachmentFileList.length > 0 ? (
        <>
          {noticeInfo.attachmentFileList.map((t) => (
            <div>
              <Link href={t.fileUrl}>
                • {t.fileName}
                <Image src={DownLoadImg} alt="download" />
              </Link>
            </div>
          ))}
        </>
      ) : (
        <div>양식이 지정되어 있지 않습니다.</div>
      )}
    </MainDiv>
  );
};
export default Portpoilo;

const MainDiv = styled.div`
  margin-top: 120px;
  font-size: 16px;

  div {
    margin-top: 30px;
  }
  a {
    font-size: 16px;
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;

    display: flex;
    align-items: center;
  }

  img {
    width: 23px;
    height: auto;
    margin-left: 10px;
  }
`;
