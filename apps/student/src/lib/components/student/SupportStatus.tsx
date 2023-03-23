import { getNoticeDetail, getSupportStatusProps } from "../../../axios/dist";
import styled from "styled-components";
import StatusDetail from "./StatusDetail";
import CommentImg from "@/public/assets/images/comment.png";
import Image from "next/image";
import { useState } from "react";

const StudentSupportStatus = ({
  status,
}: {
  status: getSupportStatusProps[];
}) => {
  const [message, setMessage] = useState<{
    content: string;
    idx?: number;
  }>({
    content: "",
    idx: undefined,
  });
  console.log(status);
  return (
    <SupportStatusDiv>
      <span>지원현황</span>
      {message.content !== "" ? (
        <Comment>
          <h1>Feedback</h1>
          <span>{message.content}</span>
        </Comment>
      ) : (
        <></>
      )}

      <div>
        {status.length > 0 ? (
          <>
            {status.map((t, i) => (
              <div key={i}>
                {t.message ? (
                  <Message
                    onClick={() => {
                      if (t.message) {
                        if (message.idx === i)
                          setMessage({
                            content: "",
                            idx: undefined,
                          });
                        else
                          setMessage({
                            content: t.message,
                            idx: i,
                          });
                      }
                    }}
                  >
                    <Image src={CommentImg} alt="메시지" />
                  </Message>
                ) : (
                  <></>
                )}
                <StatusDetail t={t} />
              </div>
            ))}
          </>
        ) : (
          <span>지원한 이력이 없습니다.</span>
        )}
      </div>
    </SupportStatusDiv>
  );
};

export default StudentSupportStatus;

const Comment = styled.div`
  width: 16.14vmax;
  min-height: 21.34vmin;
  background-color: #fefefe;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
  left: -26%;
  top: 55px;
  font-size: 18px;

  h1 {
    margin: 0;
    font-size: 24px;
  }
`;

const Message = styled.div`
  position: absolute;
  left: -10px;
  img {
    width: 2.08vmax;
    height: auto;
    transform: scale(-1, 1);
    margin-bottom: 60px;
    cursor: pointer;
  }
`;

const SupportStatusDiv = styled.div`
  position: relative;
  margin-top: 10.88vmin;
  width: 100%;
  > span {
    font-weight: 600;
    font-size: 1.25vmax;
  }
  > div:nth-last-child(1) {
    background-color: #f6f6f6;
    border: 5px solid #f6f6f6;
    border-radius: 5px;
    margin-top: 20px;
    width: 100%;
    height: 45.46vmin;
    overflow: scroll;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 12px;

    > span {
      font-size: 0.93vmax;
      font-weight: 600;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div {
      width: 100%;
      background-color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      position: relative;

      > span {
        display: inline-flex;
        align-items: center;

        > span {
          color: #101112;
          font-size: 0.78vmax;
          font-weight: 500;
        }
        > div {
          font-size: 0.78vmax;
        }
      }

      padding: 1.25vmax;
    }

    &::-webkit-scrollbar {
      opacity: 0;
    }
  }
`;
