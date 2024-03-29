import styled, { keyframes } from "styled-components";
import NoticeDetailClassification from "../../Classification";
import { useEffect, useState } from "react";
import {
  GetInterviewDetailApi,
  GetInterviewDetailApiResType,
  getInterviewListApi,
  getInterviewListApiResType,
} from "@/src/axios/dist";
import Arrow from "@/public/assets/images/arrow";
import CompanyDetailInterviewWrite from "./InterviewWrite";
import CompanyDetailInterviewViewer from "./InterviewViewer";
const CompanyDetailInterview = ({
  companyNumber,
}: {
  companyNumber: string;
}) => {
  const [interview, setInterview] = useState<getInterviewListApiResType[]>([]);
  const [interviewDetail, setInterviewDetial] =
    useState<GetInterviewDetailApiResType>();
  const [current, setCurrent] = useState<number>(-3);
  const body = document.querySelector("body") as HTMLBodyElement;

  useEffect(() => {
    if (current === -3)
      getInterviewListApi({ companyNumber: companyNumber }).then((res) => {
        setInterview(res);
      });
    else if (current > 0) {
      GetInterviewDetailApi({ interviewId: current }).then((res) => {
        setInterviewDetial(res);
      });
    }
  }, [current]);

  return (
    <Container current={current}>
      <MainDiv>
        <span>
          <NoticeDetailClassification name={"면접 후기"} />
          <span
            onClick={() => {
              setCurrent(0);
              body.style.overflow = "hidden";
            }}
          >
            면접후기 작성 <Arrow color={"rgba(16,17,18,0.7)"} />
          </span>
        </span>
        <Content>
          {interview.length > 0 ? (
            <>
              {interview.map((e) => (
                <div
                  onClick={() => {
                    setCurrent(e.id);
                    body.style.overflow = "hidden";
                  }}
                >
                  <span>
                    <div>{e.appliedJobPart}</div>
                    {e.student.studentKey} {e.student.studentName}
                  </span>
                  <span>{e.interviewDate}</span>
                </div>
              ))}
            </>
          ) : (
            <h4>작성된 면접 후기가 없습니다.</h4>
          )}
        </Content>
      </MainDiv>
      <CompanyDetailInterviewViewer
        current={{ setState: setCurrent }}
        interview={interviewDetail}
      />
      <CompanyDetailInterviewWrite
        companyNumber={companyNumber}
        current={{ setState: setCurrent }}
      />
    </Container>
  );
};
export default CompanyDetailInterview;

const FoldIn = keyframes`
    0% {
    transform:scaleY(0);
  }
  100% {
    transform:scaleY(1);
  }
  `;

const FoldOut = keyframes`
   0% {
     transform:scaleY(1);
  }
  100% {
    transform:scaleY(0);
  }
`;

const FadeIn = keyframes`
  0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }
  `;

const FadeOut = keyframes`
0% {
  transform:scale(1);
}
100% {
  transform:scale(0);
}
`;

const Container = styled.div<{ current: number }>`
  > div:nth-child(2),
  > div:nth-child(3) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(16, 17, 18, 0.8);
    z-index: 100;
  }
  > div:nth-child(2) {
    display: ${(props) =>
      props.current === 0 || props.current === -1 || props.current === -3
        ? "none"
        : "flex"};
    animation: ${(props) =>
        props.current > 0 ? FoldIn : props.current === -2 ? FoldOut : ""}
      0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    animation-delay: ${(props) => (props.current > 0 ? 0 : 0.5)}s;
    > div {
      transform: scale(0);
      animation: ${(props) =>
          props.current > 0 ? FadeIn : props.current === -2 ? FadeOut : ""}
        0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      animation-delay: ${(props) => (props.current > 0 ? 0.5 : 0)}s;
    }
  }
  > div:nth-child(3) {
    display: ${(props) =>
      props.current > 0 || props.current === -2 || props.current === -3
        ? "none"
        : "flex"};
    animation: ${(props) =>
        props.current === 0 ? FoldIn : props.current === -1 ? FoldOut : ""}
      0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    animation-delay: ${(props) => (props.current === 0 ? 0 : 0.5)}s;
    > div {
      transform: scale(0);
      animation: ${(props) =>
          props.current === 0 ? FadeIn : props.current === -1 ? FadeOut : ""}
        0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      animation-delay: ${(props) => (props.current === 0 ? 0.5 : 0)}s;
    }
  }
`;

const ArrowAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(30%);
  }
`;

const MainDiv = styled.div`
  width: 100%;
  > span {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    > span {
      cursor: pointer;
      font-size: 18px;
      color: rgba(16, 17, 18, 0.8);
      display: flex;
      &:hover {
        > svg {
          animation: ${ArrowAnimation} 0.5s infinite alternate ease-in-out;
        }
      }
    }
  }
`;
const Content = styled.div`
  width: 100%;
  height: 300px;
  box-shadow: 0 0 5px 0 rgba(16, 17, 18, 0.3);
  border-radius: 8px;
  padding: 10px;
  color: rgba(0, 0, 0, 0.7);
  overflow-y: scroll;
  > h4 {
    padding: 20px;
    margin: 0;
    font-weight: 400;
  }

  > div {
    width: 100%;
    height: 74px;
    background-color: #fff;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    cursor: pointer;
    font-size: 20px;
    > span:nth-child(1) {
      display: inline-flex;
      align-items: center;
      gap: 15px;
      > div {
        background-color: #6750f8;
        color: #f6f6f6;
        padding: 8px 20px;
        font-size: 16px;
        border-radius: 24px;
        font-weight: 600;
      }
    }
    > span:nth-child(2) {
      font-size: 16px;
      color: rgba(16, 17, 18, 0.6);
    }
  }
`;
