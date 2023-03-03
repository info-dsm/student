import {
  getClosedNoticeList,
  getClosedNoticeListContentProps,
  getWaitingNoticeList,
  getWaitingNoticeListContentProps,
} from "../../../axios/dist";
import styled from "styled-components";
import StudentNoticeBanner from "../../../lib/components/student/noticebanner";
import StudentClosedNotice from "../../../lib/components/student/closedNotice";
import StudentNotice from "../../../lib/components/student/notice";
import { useState, useLayoutEffect } from "react";
import HeaderComponent from "ui/components/StudentHeader";
import NoticePlaceHolder from "../../../lib/components/student/placeholder";
import ClosedNoticePlaceHolder from "../../../lib/components/student/closedPlaceholder";

const StudentNoticeList = () => {
  const [notice, setNotice] = useState<getWaitingNoticeListContentProps[]>([]);
  const [closedNotice, setClosedNotice] = useState<
    getClosedNoticeListContentProps[]
  >([]);
  const [cnt, setCnt] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(true);

  useLayoutEffect(() => {
    const getNotice = () => {
      if (typeof document !== "undefined") {
        const companyContainer = document.getElementById(
          "noticeContainer"
        ) as HTMLDivElement;

        if (cnt * 12 === companyContainer.children.length)
          getWaitingNoticeList({ idx: cnt, size: 12 }).then((res) => {
            setNotice((list) => list?.concat(res.content));
            setCnt(cnt + 1);
            setScrolled(false);
            getClosedNoticeList({ idx: cnt, size: 5, status: "APPROVE" }).then(
              (res) => {
                setClosedNotice((list) => list?.concat(res.content));
              }
            );
          });
        else setScrolled(false);
      }
    };

    if (scrolled) {
      getNotice();
    }
  }, [scrolled, setScrolled]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (e) => {
      if (document.body.offsetHeight - window.innerHeight === window.scrollY) {
        setScrolled(true);
      }
    });
  }

  return (
    <>
      <HeaderComponent />
      <StudentNoticeBanner />
      <MainDiv>
        <Kind>
          <div>
            <div>모집공고</div>
            <span>마감 일자순 정렬</span>
          </div>
          <div>
            <div>마감된 공고</div>
            {/* <div>
              <Arrow color={"#4d4d4d"} />
              <Arrow color={"#4d4d4d"} />
            </div> */}
          </div>
        </Kind>

        <Content>
          {notice.length > 0 ? <>
          <NoticeContainer id="noticeContainer">
            {notice.map((t) => (
              <StudentNotice info={t} />
            ))}
          </NoticeContainer>
          </> : <>
          <NoticePlaceHolder/>
          <NoticeContainer id="noticeContainer" style={{width: "0px"}}/>
          </>} 
          
          <div>
            {closedNotice.length > 0 ? (
              <>
                {closedNotice.map((t) => (
                  <StudentClosedNotice info={t} />
                ))}
              </>
            ) : (
              <ClosedNoticePlaceHolder/>
            )}
          </div>
        </Content>
      </MainDiv>
    </>
  );
};

export default StudentNoticeList;

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f8f9;
`;

const Content = styled.div`
  padding: 0px 236px;
  display: flex;
`;

const ClosedNoticeContainer = styled.div``;

const NoticeContainer = styled.div`
  width: 1156px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 10%;
`;

const Kind = styled.div`
  padding: 80px 256px 30px 236px;
  width: 100vw;
  display: inline-flex;
  justify-content: space-between;
  > div {
    display: inline-flex;
    align-items: center;
    gap: 20px;
    font-weight: 600;
    font-size: 24px;
    color: #101112;
    span {
      font-weight: 400;
      font-size: 17px;
    }
    + div {
      width: 274px;
      display: inline-flex;
      justify-content: space-between;
      div {
        display: inline-flex;
        align-items: center;
        + div {
          gap: 5px;
          svg:nth-child(1) {
            transform: scale(-1, 1);
          }
        }
      }
    }
  }
`;