import styled, { keyframes } from "styled-components";
import NoticeDetailClassification from "../../Classification";
import { useEffect, useState } from "react";
import {
  getInterviewListApi,
  getInterviewListApiResType,
} from "@/src/axios/dist";
const CompanyDetailInterview = ({
  companyNumber,
}: {
  companyNumber: string;
}) => {
  const [interview, setInterview] = useState<getInterviewListApiResType[]>([]);
  const [interviewDetail, setInterviewDetial] = useState();
  const [current, setCurrent] = useState<number>(-1);

  useEffect(() => {
    getInterviewListApi({ companyNumber: companyNumber }).then((res) => {
      setInterview(res);
      console.log(res);
    });
  }, []);

  return (
    <Container current={current}>
      <MainDiv>
        <span>
          <NoticeDetailClassification name={"면접 후기"} />
          <span>asd</span>
        </span>
        <Content>
          {interview.length > 0 ? (
            <>
              {interview.map((e) => (
                <div
                  onClick={() => {
                    setCurrent(e.id);
                    const body = document.querySelector(
                      "body"
                    ) as HTMLBodyElement;
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
      <div></div>
    </Container>
  );
};
export default CompanyDetailInterview;

// @keyframes blowUpContentTwo {
//   0% {
//     transform:scale(2);
//     opacity:0;
//   }
//   100% {
//     transform:scale(1);
//     opacity:1;
//   }
// }

// @keyframes blowUpModal {
//   0% {
//     transform:scale(0);
//   }
//   100% {
//     transform:scale(1);
//   }
// }

// @keyframes blowUpModalTwo {
//   0% {
//     transform:scale(1);
//     opacity:1;
//   }
//   100% {
//     transform:scale(0);
//     opacity:0;
//   }
// }

const FadeInModal = keyframes`
  0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }
  `;

const Container = styled.div<{ current: number }>`
  > div:nth-child(2) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(16, 17, 18, 0.5);
    z-index: 100;
    transform: scale(0);
    animation: ${(props) => (props.current !== -1 ? FadeInModal : "")} 0.5s
      cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }
  /* &.four {
    z-index: 0;
    transform: scale(1);
    .modal-background {
      background: rgba(0, 0, 0, 0.7);
      .modal {
        animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
    + .content {
      z-index: 1;
      animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
    &.out {
      .modal-background {
        .modal {
          animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
            forwards;
        }
      }
      + .content {
        animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
      }
    }
  } */
`;

const MainDiv = styled.div`
  width: 100%;
  > span {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
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
