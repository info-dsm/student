import React from "react";
import { getNoticeDetailProps } from "../../../axios/dist";
import NoticeDetailClassification from "./Classification";
import styled from "styled-components";
import Image from "next/image";
import DownLoadImg from "@/public/assets/images/download.png";

const Portpoilo = ({ noticeInfo }: { noticeInfo: getNoticeDetailProps }) => {
  return (
    <MainDiv>
      <NoticeDetailClassification name={"이력서"} />
    </MainDiv>
  );
};
export default Portpoilo;

const MainDiv = styled.div`
  margin-top: 120px;

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
