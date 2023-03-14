import React, { useState } from "react";
import NoticeDetailClassification from "./Classification";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import UploadImg from "@/public/assets/images/upload.png";
import {
  applyNotice,
  createNoticeFile,
  getNoticeDetailProps,
  reissue,
} from "@/src/axios/dist";
import { useRouter } from "next/router";

const Attachment = ({
  NoticeInfo,
  NoticeID,
}: {
  NoticeInfo: getNoticeDetailProps;
  NoticeID: string[];
}) => {
  const [file, setFile] = useState<File[]>([]);
  const router = useRouter();

  const applyNoticeForm = () => {
    reissue()
      .then(() => {
        const form = file.map((t) => ({
          fileName: t.name,
          contentType: t.type,
        }));
        applyNotice({
          id: NoticeInfo.noticeId,
          form: form,
        }).then((res: any) => {
          createNoticeFile(res, file)
            .then(() => {
              alert("지원에 성공했습니다!");
              router.push("/");
            })
            .catch(() => {
              console.log("error");
            });
        });
      })
      .catch(() => {
        alert("로그인이 만료되었습니다.");
        router.push("/auth/login");
      });
  };

  return (
    <>
      <MainDiv>
        <hr />
        <NoticeDetailClassification name={"파일첨부"} />
        <UploadDiv>
          <label htmlFor="resume">
            <Image src={UploadImg} alt="" />
            <span>Upload Resume</span>
          </label>
          <input
            type={"file"}
            accept={".pdf, .hwp"}
            id="resume"
            multiple
            onChange={(e: any) =>
              setFile(file.concat(Object.values(e.target.files)))
            }
          />
          {file.length > 0 ? (
            <>
              {file.map((t, i, a) => (
                <div>
                  <span>{t.name}</span>
                  <span
                    onClick={() => setFile(a.filter((_, a_idx) => a_idx != i))}
                  >
                    Delete File ⨉
                  </span>
                </div>
              ))}
            </>
          ) : (
            <div>파일을 여러 개 선택해주세요!</div>
          )}
          <span>
            <button
              onClick={() => {
                applyNoticeForm();
              }}
            >
              {NoticeID.includes(NoticeInfo.noticeId) ? (
                <>모집공고 수정하기 →</>
              ) : (
                <>모집공고 지원하기 →</>
              )}
            </button>
          </span>
        </UploadDiv>
      </MainDiv>
    </>
  );
};
export default Attachment;

const DeleteAnimation = keyframes`
    0% {
        transform: translateX(150%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`;

const UploadDiv = styled.div`
  width: 100%;
  margin-top: 40px;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 10px;
  > div {
    font-size: 15px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 7px 10px;
    margin-bottom: 5px;
    font-weight: 700;
    display: inline-flex;
    justify-content: space-between;
    overflow: hidden;
    span:nth-child(2) {
      color: #eb1e1e;
      opacity: 0;
      cursor: pointer;
    }

    &:hover {
      span:nth-child(2) {
        animation: ${DeleteAnimation} 0.7s ease-in-out;
        animation-fill-mode: forwards;
      }
    }
  }
  > span {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    button {
      padding: 0 15px;
      height: 40px;
      background-color: ${(props) => props.theme.colors.blue};
      border: none;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 700;
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
    }
  }
`;

const MainDiv = styled.div`
  margin-top: 120px;
  width: 100%;
  box-sizing: border-box;

  > hr {
    border: none;
    background-color: rgba(0, 0, 0, 0.3);
    height: 2px;
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
  }

  label {
    display: inline-block;
    padding: 5px 12px;
    background-color: ${(props) => props.theme.colors.blue};
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    margin-bottom: 10px;
    display: inline-flex;
    align-items: center;

    > img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    /* border-radius: 24px;
    cursor: pointer;
    color: #fff;
    background-color: #6750f8;
    border: none;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: 600; */
  }
`;
