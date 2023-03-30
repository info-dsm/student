import StudentNoticeBanner from "../../../src/lib/components/student/noticebanner";
import HeaderComponent from "ui/components/StudentHeader";
import styled, { keyframes } from "styled-components";
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
import DownLoadImg from "@/public/assets/images/download.png";
import StudentAnnounceBanner from "@/src/lib/components/student/AnnounceBanner";
import { useRouter } from "next/router";
import Link from "next/link";

const Announcement = () => {
  const [announce, setAnnounce] = useState<AnnouncementListProps>();
  const [current, setCurrent] = useState<number>(0);
  const [total, setTotal] = useState<number[]>([]);
  const [announceId, setAnnounceId] = useState("");
  const [detail, setDetail] = useState<AnnouncementDetailProps>();
  const [show, setShow] = useState(false);
  const [name, setName] = useState<"전체" | "DEVELOPER" | "TEACHER">("전체");
  const router = useRouter();

  useEffect(() => {
    AnnouncementList({ idx: current, size: 11, type: name }).then(
      (res: AnnouncementListProps) => {
        setAnnounce(res);
        setTotal(
          Array.from({ length: Math.ceil(res.totalElements / 11) }, (_, i) => {
            return i + 1;
          })
        );
      }
    );
  }, [current, name]);

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
      <MainDiv id="announce">
        <div>
          <span
            onClick={() => {
              if (detail === undefined) router.back();
              else {
                setDetail(undefined);
                setAnnounceId("");
              }
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
                <SelectDiv>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setShow(!show);
                    }}
                  >
                    {name}
                  </span>
                  <DataList state={show}>
                    {["전체", "DEVELOPER", "TEACHER"].map((e: any, i) => (
                      <>
                        <div
                          key={i}
                          onClick={() => {
                            setName(e);
                            setShow(false);
                            setCurrent(0);
                          }}
                        >
                          {e}
                        </div>
                      </>
                    ))}
                  </DataList>
                </SelectDiv>
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
                  <>ㅤ 공지가 없습니다.</>
                )}
              </>
            ) : (
              <AnnounceBox>
                <h1>{detail.title}</h1>
                <div>{detail.createdAt.substring(0, 10)}</div>
                {detail.fileList.map((c) => (
                  <>
                    {c.fileType === "IMAGE" ? (
                      <Image
                        src={c.fileUrl}
                        alt={c.fileName}
                        width={0}
                        height={0}
                      />
                    ) : (
                      <></>
                    )}
                  </>
                ))}
                <br />
                <span>{detail.content}</span>
                <br />
                <br />
                {detail.fileList.map((c) => (
                  <>
                    {c.fileType !== "IMAGE" ? (
                      <>
                        <Link href={c.fileUrl}>
                          • {c.fileName}
                          <Image
                            src={DownLoadImg}
                            alt="download"
                            width={23}
                            height={23}
                          />
                        </Link>
                        <br />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
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

  > img {
    width: 100%;
    height: auto;
  }
  > a,
  > span {
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
  }
  > a > img {
    width: 20px;
    height: auto;
    margin-left: 10px;
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
  margin-top: 100px;
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

const SelectDiv = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;

  > span {
    width: 8vmax;
    height: 3.94vmin;
    border: 2px solid rgba(0, 0, 0, 0.3);
    padding-left: 10px;
    color: ${(props) => props.theme.colors.black};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 0.72vmax;
    cursor: pointer;
    font-weight: 500;
  }
`;
const FadeInDataList = keyframes`
0% {
    transform: translateY(-50px);
    opacity: 0;
}100% {
    transform: translateY(0);
    opacity: 1;
}
`;

const DataList = styled.div<{ state: boolean | string }>`
  position: absolute;
  animation: ${FadeInDataList} 0.5s;
  width: 100%;
  z-index: 2;
  max-height: 14.58vmax;
  transition: 1s;
  display: ${(props) => (props.state ? "block" : "none")};
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-radius: 4px;
  overflow-y: scroll;
  font-weight: 500;
  &::-webkit-scrollbar {
    display: none;
  }
  div {
    cursor: pointer;
    height: 4.48vmin;
    display: flex;
    align-items: center;
    font-size: 0.72vmax;
    padding-left: 10px;
  }

  div:hover {
    background-color: rgba(0, 0, 0, 0.15);
    transition: 0.2s;
  }
`;
