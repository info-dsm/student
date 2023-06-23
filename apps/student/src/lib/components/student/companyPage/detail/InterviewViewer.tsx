import styled from "styled-components";
import { useState } from "react";
import { GetInterviewDetailApiResType } from "@/src/axios/dist";
import CompanyDetailInterviewInfo from "./InterviewInfo";

const CompanyDetailInterviewViewer = ({
  current,
  interview,
}: {
  interview?: GetInterviewDetailApiResType;
  current: { setState: (value: number) => void };
}) => {
  const closeModal = () => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.style.overflowY = "scroll";
    current.setState(-2);
    setTimeout(() => {
      current.setState(-3);
    }, 1000);
  };

  return (
    <MainDiv
      id="CompanyDetailInterview"
      onClick={(e) => {
        e.stopPropagation();
        const target = e.target as HTMLDivElement;
        if (target.id === "CompanyDetailInterview") closeModal();
      }}
    >
      <div>
        <h1>얼리슬로스 면접 후기</h1>
        <h5>
          {interview?.student.studentKey} {interview?.student.studentName}
        </h5>
        <hr />
        <h4>
          {interview?.appliedJobPart} | {interview?.interviewPlace} |{" "}
          {interview?.interviewDate}
        </h4>
        {/* <CompanyDetailInterviewInfo req={{ state: req, setState: setReq }} /> */}
        <hr />
        <div>면접 질문 내용</div>
        <TextAreaBox height={22}>{interview?.questionContent}</TextAreaBox>
        <div>면접 소감</div>
        <TextAreaBox height={15}>{interview?.interviewImpression}</TextAreaBox>
        <div>면접 시 주의사항</div>
        <TextAreaBox height={15}>{interview?.interviewCaution}</TextAreaBox>
      </div>
    </MainDiv>
  );
};
export default CompanyDetailInterviewViewer;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(16, 17, 18);

  > div {
    width: 40%;
    height: max-content;
    background-color: #f8f8f9;
    box-shadow: 0 0 15px 0 rgba(16, 17, 18, 0.2);
    border-radius: 8px;
    padding: 2vmin 3vmin;
    > h5,
    > h4 {
      color: rgba(16, 17, 18, 0.9);
      font-weight: 400;
      margin: 0;
    }
    > h4 {
      font-size: 16px;
    }
    > span {
      display: grid;
      grid-template-columns: repeat(2, 2fr);
      grid-row-gap: 10px;
      text-align: right;
      h4 {
        margin: 0;
        font-size: 1.8vmin;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 15px;
        width: 100%;
        > div {
          width: 26%;
        }
      }
    }
    > h1 {
      font-size: 2.3vmin;
    }
    > hr {
      background-color: rgba(16, 17, 18, 0.4);
      border: none;
      height: 1px;
      width: 100%;
      margin: 2vmin 0;
    }
    > div {
      font-size: 1.8vmin;
      font-weight: 500;
      margin-bottom: 0px;
      padding: 1vmin 1.8vmin;
      border-radius: 15px 15px 0 0;
      background-color: #6750f8;
      width: max-content;
      color: #f8f8f9;
    }
  }
`;
const TextAreaBox = styled.p<{ height: number }>`
  margin: 0;
  width: 100%;
  resize: none;
  height: ${(props) => props.height}vmin;
  padding: 1.5vmin;
  border-radius: 0 5px 5px 5px;
  margin-bottom: 2vmin;
  border: 1px solid rgba(16, 17, 18, 0.6);
  overflow-y: scroll;
  white-space: pre-wrap;
`;
