import StudentNoticeBanner from "../../../src/lib/components/student/noticebanner";
import HeaderComponent from "ui/components/StudentHeader";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { AnnouncementList, AnnouncementListProps } from "@/src/axios/dist";
import { Footer } from "@/../../packages/ui/dist";

const Announcement = () => {
  const [announce, setAnnounce] = useState<AnnouncementListProps>();
  const [current, setCurrent] = useState<number>(0);
  const [total, setTotal] = useState<number[]>([]);
  useEffect(() => {
    AnnouncementList({ idx: current, size: 10 }).then(
      (res: AnnouncementListProps) => {
        setAnnounce(res);
        if (total.length === 0)
          setTotal(
            Array.from(
              { length: Math.ceil(res.totalElements / 10) },
              (_, i) => {
                return i + 1;
              }
            )
          );
      }
    );
  }, []);

  return (
    <>
      <HeaderComponent />
      <StudentNoticeBanner />
      <MainDiv>
        <div>
          <span>교내 공지</span>
          <div>
            {announce ? (
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
                {announce.content.map((t) => (
                  <NoticeBox>
                    <span>
                      <div>
                        {t.type === "DEVELOPER" ? "개발자" : "산학부"} |{" "}
                      </div>
                      <div>{t.title}</div>
                    </span>
                    <span>{t.createdAt.substring(0, 10)}</span>
                  </NoticeBox>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
          <Pagination>
            {total.map((t, i, a) => (
              <>{i < 3 ? <div>{t}</div> : <></>}</>
            ))}
            {total.length > 3 ? (
              <>
                <div>...</div>
                <div>{total.length}</div>
              </>
            ) : (
              <></>
            )}
          </Pagination>
        </div>
      </MainDiv>
      <Footer />
    </>
  );
};
export default Announcement;

const Pagination = styled.span`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
`;

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
    width: 85%;
    > div:nth-child(2) {
      margin-left: 5px;
      width: 85%;
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
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  > div {
    width: 50vw;
    height: 120vh;
    background-color: #fff;
    padding: 70px 120px 150px;

    > span:nth-child(1) {
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
