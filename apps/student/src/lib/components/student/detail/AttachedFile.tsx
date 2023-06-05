import Image from "next/image";
import styled from "styled-components";
import DownImg from "@/public/assets/images/download.png";
import DragDrop from "./DragDrop";
import { useState } from "react";
import {
  applyNotice,
  createNoticeFile,
  getNoticeDetailProps,
} from "@/src/axios/dist";
import { useRouter } from "next/router";
import { Notice } from "../Alert";
import { FilesType } from "@/src/lib/types";

const DetailPageAttachedFile = ({
  noticeInfo,
}: {
  noticeInfo: getNoticeDetailProps;
}) => {
  const [files, setFiles] = useState<FilesType[]>([]);
  const router = useRouter();

  const applyNoticeForm = () => {
    const form = files.reduce(
      (
        acc: {
          fileName: string;
          contentType: string;
        }[],
        t
      ) => {
        if (t.checked) {
          acc.push({
            fileName: t.file.name,
            contentType: t.file.type,
          });
        }
        return acc;
      },
      []
    );
    if (form.length >= 1) {
      applyNotice({
        id: noticeInfo.noticeId,
        form: form,
      }).then((res: any) => {
        createNoticeFile(
          res,
          files.map((e) => e.file)
        )
          .then(() => {
            alert("지원에 성공했습니다!");
            router.push("/");
          })
          .catch(() => {
            console.log("error");
          });
      });
    } else
      Notice({
        message: "파일을 넣어주세요.",
        state: "error",
      });
  };

  return (
    <MainDiv>
      <div>
        <h2>첨부파일</h2>
        <Explain>
          이력서 파일 다운로드
          <Image src={DownImg} alt="" />
        </Explain>
        <DragDrop files={{ state: files, setState: setFiles }} />
      </div>
      <SubmitBtn>
        <button onClick={() => applyNoticeForm()}>제출하기</button>
      </SubmitBtn>
    </MainDiv>
  );
};
export default DetailPageAttachedFile;

const MainDiv = styled.div`
  > div:nth-child(1) {
    width: 60%;
    padding: 18px 31px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px 5px 0 0;
    > h2 {
      margin: 0;
      margin-bottom: 10px;
      font-size: 21px;
    }
  }
`;

const SubmitBtn = styled.div`
  width: 60%;
  height: 30%;
  padding: 31px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 5px 5px;
  > button {
    width: 100%;
    padding: 15px;
    border: none;
    background-color: #6750f8;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s ease;

    &:hover {
      transform: translate3d(0, 10%, 0);
    }

    &:active {
      transform: translate3d(0, 20%, 0);
    }
  }
`;

const Explain = styled.div`
  padding: 6px 10px;
  color: #8d8d8d;
  font-size: 12px;
  background-color: #6750f820;
  width: max-content;
  border-radius: 10px;
  > img {
    margin-bottom: -1px;
    margin-left: 5px;
    width: 12px;
    height: 12px;
  }
`;
