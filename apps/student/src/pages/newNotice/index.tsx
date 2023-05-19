import HeaderComponent from "@/../../packages/ui/components/StudentHeader";
import StudentNoticeBanner from "@/src/lib/components/student/noticePage/Banner";
import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import {
  getClosedNoticeList,
  getClosedNoticeListContentProps,
  getWaitingNoticeList,
  getWaitingNoticeListContentProps,
} from "@/src/axios/dist";
import NoticeList from "@/src/lib/components/student/noticePage/NoticeList";
import TagList from "@/src/lib/components/student/noticePage/TagList";
import { TagNameType } from "@/src/lib/types";

const NoticePage = () => {
  const [cnt, setCnt] = useState<number>(0);
  const [notice, setNotice] = useState<getWaitingNoticeListContentProps[]>([]);
  const [closedNotice, setClosedNotice] = useState<
    getClosedNoticeListContentProps[]
  >([]);
  const [scrolled, setScrolled] = useState<boolean>(true);
  const [name, setName] = useState<TagNameType>({
    companyName: "",
    smallClassification: "전체",
  });

  useLayoutEffect(() => {
    const getNotice = () => {
      if (typeof document !== "undefined") {
        const companyContainer = document.getElementById(
          "noticeContainer"
        ) as HTMLDivElement;

        if (cnt * 6 === companyContainer.children.length || cnt === 0)
          getWaitingNoticeList({ idx: cnt, size: 6 }).then((res) => {
            setNotice((list) => list?.concat(res.content));
            setCnt(cnt + 1);
            setScrolled(false);
            getClosedNoticeList({
              idx: cnt,
              size: 4,
              status: "APPROVE",
            }).then((res) => {
              setClosedNotice((list) => list?.concat(res.content));
            });
          });
        else setScrolled(false);
      }
    };

    if (scrolled) {
      getNotice();
    }
  }, [scrolled, setScrolled]);

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    window.addEventListener("scroll", (e) => {
      if (
        document.body.offsetHeight - window.innerHeight - 1 <=
        window.scrollY
      ) {
        setScrolled(true);
      }
    });
  }

  return (
    <MainDiv>
      <HeaderComponent />
      <StudentNoticeBanner />
      <Container>
        <TagList name={{ state: name, setState: setName }} />
        <hr />
        <NoticeList cnt={cnt} notice={notice} closedNotice={closedNotice} />
      </Container>
    </MainDiv>
  );
};
export default NoticePage;

const MainDiv = styled.div`
  width: 100vw;
  * {
    /* font-family: "Pretendard Variable"; */
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > hr {
    width: 70%;
    border: none;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
