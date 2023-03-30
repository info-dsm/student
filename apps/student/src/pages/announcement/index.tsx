import StudentNoticeBanner from "../../../src/lib/components/student/noticebanner";
import HeaderComponent from "ui/components/StudentHeader";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import BackArrow from "@/public/assets/images/BackArrow.png";
import {
  AnnouncementDetail,
  AnnouncementDetailProps,
  AnnouncementList,
  AnnouncementListProps,
} from "@/src/axios/dist";
import { Footer } from "@/../../packages/ui/dist";
import AnnouncePageNation from "@/src/lib/components/student/Pagenation";
import Image from "next/image";
import StudentAnnounceBanner from "@/src/lib/components/student/AnnounceBanner";
import { useRouter } from "next/router";

const Announcement = () => {
  const [announce, setAnnounce] = useState<AnnouncementListProps>();
  const [current, setCurrent] = useState<number>(0);
  const [total, setTotal] = useState<number[]>([]);
  const [announceId, setAnnounceId] = useState("");
  const [detail, setDetail] = useState<AnnouncementDetailProps>();
  const router = useRouter();

  useEffect(() => {
    AnnouncementList({ idx: current, size: 11 }).then(
      (res: AnnouncementListProps) => {
        setAnnounce(res);
        if (total.length === 0)
          setTotal(
            Array.from({ length: Math.ceil(res.totalElements / 9) }, (_, i) => {
              return i + 1;
            })
          );
      }
    );
  }, [current]);

  useEffect(() => {
    if (announceId !== "")
      AnnouncementDetail({ announcementId: announceId }).then((res) => {
        console.log(res);
        setDetail(res);
      });
  }, [announceId]);

  return (
    <>
      <HeaderComponent />
      <StudentAnnounceBanner number={total.length} />
      <MainDiv>
        <div>
          <span
            onClick={() => {
              if (detail === undefined) router.back();
              else setDetail(undefined);
            }}
          >
            <Image src={BackArrow} alt="" />
            <span>뒤로가기</span>
            <br />
            <br />
          </span>
          <h1>공지</h1>
          <div>
            {detail === undefined ? (
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
                {announce?.content.map((t) => (
                  <NoticeBox onClick={() => setAnnounceId(t.id)}>
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
              <AnnounceBox>
                <h1>{detail.title}</h1>
                <div>{detail.createdAt.substring(0, 10)}</div>
                {detail.fileList.map((c) => (
                  <Image
                    src={c.fileUrl}
                    alt={c.fileName}
                    width={0}
                    height={0}
                  />
                ))}
                <span>{detail.content}</span>
              </AnnounceBox>
            )}
          </div>
          {detail === undefined ? (
            <AnnouncePageNation
              total={total}
              current={{ state: current, setState: setCurrent }}
            />
          ) : (
            <></>
          )}
        </div>
      </MainDiv>
      <Footer />
    </>
  );
};
export default Announcement;

const AnnounceBox = styled.div`
  padding: 30px;
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;

  ::-webkit-scrollbar {
    background-color: #fff;
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #6141cc;
    border-radius: 3px;
    width: 10px;
  }
  h1 {
    font-size: 24px;
  }
  > div {
    width: 100%;
    text-align: end;
    margin-bottom: 30px;
  }

  img {
    width: 100%;
    height: auto;
  }
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
    padding: 70px 120px 250px;
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