import styled from "styled-components";
import { useState } from "react";
import { PostInterviewApi, PostInterviewApiResType } from "@/src/axios/dist";
import CompanyDetailInterviewInfo from "./InterviewInfo";
import { Notice } from "../../Alert";

const CompanyDetailInterviewWrite = ({
  companyNumber,
  current,
}: {
  companyNumber: string;
  current: { setState: (value: number) => void };
}) => {
  const [req, setReq] = useState<PostInterviewApiResType>({
    appliedJobPart: "",
    interviewDate: "",
    directorCount: NaN,
    interviewPlace: "",
    interviewType: "OFFLINE",
    questionContent: "",
    interviewImpression: "",
    interviewCaution: "",
  });

  const closeModal = () => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.style.overflowY = "scroll";
    current.setState(-1);
    setTimeout(() => {
      current.setState(-3);
    }, 500);
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
        <hr />
        <CompanyDetailInterviewInfo req={{ state: req, setState: setReq }} />
        <hr />
        <div>면접 질문 내용</div>
        <TextAreaBox
          height={16}
          maxLength={2000}
          onChange={(e) => setReq({ ...req, questionContent: e.target.value })}
        />
        <div>면접 소감</div>
        <TextAreaBox
          height={11}
          maxLength={500}
          onChange={(e) =>
            setReq({ ...req, interviewImpression: e.target.value })
          }
        />
        <div>면접 시 주의사항</div>
        <TextAreaBox
          height={11}
          maxLength={500}
          onChange={(e) => setReq({ ...req, interviewCaution: e.target.value })}
        />
        <p>
          <button
            onClick={() => {
              if (
                !(
                  Object.values(req).includes("") ||
                  Object.values(req).includes(NaN)
                )
              ) {
                PostInterviewApi({
                  data: req,
                  companyNumber: companyNumber,
                }).then(() => {
                  Notice({
                    message: "성공적으로 생성되었습니다.",
                    state: "success",
                  });
                  closeModal();
                });
              } else
                Notice({
                  message: "내용을 모두 입력해주세요.",
                  state: "error",
                });
            }}
          >
            게시
          </button>
        </p>
      </div>
    </MainDiv>
  );
};
export default CompanyDetailInterviewWrite;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input,
  textarea,
  select {
    background-color: transparent;
    border: 1px solid rgba(16, 17, 18, 0.4);
    font-size: 16px;
  }

  input,
  select {
    width: 50%;
    height: 3vmin;
    border-radius: 4px;
  }

  > div {
    width: 40%;
    height: 90%;
    background-color: #f8f8f9;
    box-shadow: 0 0 15px 0 rgba(16, 17, 18, 0.2);
    border-radius: 8px;
    padding: 2vmin;
    p {
      margin: 0;
      width: 100%;
      text-align: right;
      > button {
        cursor: pointer;
        padding: 0.8vmin 2.2vmin;
        font-size: 2vmin;
        font-weight: 600;
        background-color: #6750f8;
        color: #f8f8f9;
        border-radius: 5px;
        border: none;
      }
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
        select {
          padding-left: 4px;
        }
        input {
          padding-left: 8px;
          &::placeholder {
            color: rgba(16, 17, 18, 0.5);
          }
        }
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
const TextAreaBox = styled.textarea<{ height: number }>`
  width: 100%;
  resize: none;
  height: ${(props) => props.height}vmin;
  padding: 1vmin;
  border-radius: 0 5px 5px 5px;
  margin-bottom: 2vmin;
`;
