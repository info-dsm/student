import Image from "next/image";
import styled from "styled-components";
import DownImg from "@/public/assets/images/download.png";
import DragDrop from "./DragDrop";

const DetailPageAttachedFile = () => {
  return (
    <MainDiv>
      <div>
        <h2>첨부파일</h2>
        <Explain>
          이력서 파일 다운로드
          <Image src={DownImg} alt="" />
        </Explain>
        <DragDrop />
        {/* <UploadBtn>업로드</UploadBtn> */}
      </div>
      <SubmitBtn>
        <button>제출하기</button>
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

const UploadBtn = styled.div`
  margin-top: 38px;
  width: 100%;
  border: 1px solid #6750f8;
  border-radius: 24px;
  padding: 11px;
  text-align: center;
  font-size: 18px;
  color: #6750f8;
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
