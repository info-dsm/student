import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AnnouncementList, AnnouncementListProps } from "@/src/axios/dist";

const MegaPhoneV2 = () => {
  const [announce, setAnnounce] = useState<AnnouncementListProps>();
  const router = useRouter();

  useEffect(() => {
    AnnouncementList({ idx: 0, size: 3, type: "전체" }).then(
      (res: AnnouncementListProps) => {
        setAnnounce(res);
      }
    );
  }, []);

  return (
    <MainDiv>
      <div>
        <h1>공지</h1>
        <div>
          <>
            <Nav>
              <span>
                <div>Type</div>
                <div> | </div>
                <div>제목</div>
              </span>
              <div>날짜</div>
            </Nav>
            <hr />
            {announce && announce.content.length > 0 ? (
              <>
                {announce?.content.map((t) => (
                  <>
                    <NoticeBox onClick={() => router.push("/announcement")}>
                      <span>
                        <div>
                          {t.type === "DEVELOPER" ? "개발자" : "산학부"} |{" "}
                        </div>
                        <div>{t.title}</div>
                      </span>
                      <span>{t.createdAt.substring(0, 10)}</span>
                    </NoticeBox>
                  </>
                ))}
              </>
            ) : (
              <>ㅤ 공지가 없습니다.</>
            )}
          </>
        </div>
      </div>
    </MainDiv>
  );
};

export default MegaPhoneV2;

const NoticeBox = styled.div`
  border: 2px solid #ededed;
  padding: 15px 12px;
  border-radius: 5px;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 6px;

  > span:nth-child(1) {
    display: inline-flex;
    width: 80%;
    > div:nth-child(2) {
      margin-left: 5px;
      width: 80%;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const Nav = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  font-weight: 600;
  color: #505050;
  span {
    width: 100%;
    display: inline-flex;

    div:nth-child(1) {
      margin-left: 13px;
      text-align: center;
      width: 54px;
    }
    div:nth-child(3) {
      padding-left: 6px;
      width: 85%;
    }

    + div {
      width: 50px;
    }
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 70px;
  > div {
    width: 73.9%;
    height: 50%;
    > span:nth-child(1) {
      font-size: 24px;
      font-weight: 800;
      display: inline-flex;
      cursor: pointer;
      align-items: center;
      img {
        width: 50px;
        height: auto;
      }
    }
    > h1 {
      font-size: 24px;
      font-weight: 800;
    }
    > div {
      margin-top: 20px;
      width: 100%;
      height: 100%;
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      padding: 30px;
      font-size: 16px;
      position: relative;

      hr {
        border: none;
        background-color: #505050;
        height: 1px;
        margin: 15px 0;
        margin-bottom: 20px;
      }
    }
  }
`;
