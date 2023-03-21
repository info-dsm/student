import {
  getClassification,
  getClassificationNotice,
  getClassificationProps,
  getClosedNoticeList,
  getClosedNoticeListContentProps,
  getWaitingNoticeList,
  getWaitingNoticeListContentProps,
} from "../../axios/dist";
import styled, { keyframes } from "styled-components";
import StudentNoticeBanner from "../../lib/components/student/noticebanner";
import StudentClosedNotice from "../../lib/components/student/closedNotice";
import StudentNotice from "../../lib/components/student/notice";
import { useState, useLayoutEffect, useEffect } from "react";
import HeaderComponent from "ui/components/StudentHeader";
import NoticePlaceHolder from "../../lib/components/student/placeholder";
import ClosedNoticePlaceHolder from "../../lib/components/student/closedPlaceholder";

const StudentNoticeList = () => {
  const [notice, setNotice] = useState<getWaitingNoticeListContentProps[]>([]);
  const [closedNotice, setClosedNotice] = useState<
    getClosedNoticeListContentProps[]
  >([]);
  const [cnt, setCnt] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(true);
  const [classification, setClassification] = useState<
    getClassificationProps[]
  >([]);
  const [show, setShow] = useState<boolean | string>("");
  const [name, setName] = useState({ name: "전체", content: "전체" });

  useLayoutEffect(() => {
    const getNotice = () => {
      if (typeof document !== "undefined") {
        const companyContainer = document.getElementById(
          "noticeContainer"
        ) as HTMLDivElement;

        if (cnt * 12 === companyContainer.children.length || cnt === 0)
          if (name.name === "전체")
            getWaitingNoticeList({ idx: cnt, size: 12 }).then((res) => {
              setNotice((list) => list?.concat(res.content));
              setCnt(cnt + 1);
              setScrolled(false);
              getClosedNoticeList({
                idx: cnt,
                size: 5,
                status: "APPROVE",
              }).then((res) => {
                setClosedNotice((list) => list?.concat(res.content));
              });
            });
          else {
            getClassificationNotice({ classification: name.name }).then(
              (res) => {
                setNotice((list) => list?.concat(res.content));
                setCnt(cnt + 1);
                setScrolled(false);
              }
            );
          }
        else setScrolled(false);
      }
    };

    if (scrolled) {
      getNotice();
    }
  }, [scrolled, setScrolled]);

  useEffect(() => {
    getClassification().then((res) => {
      setClassification(
        [
          {
            bigClassification: {
              bigClassificationName: "전체",
            },
            name: "전체",
          },
        ].concat(res)
      );
    });
  }, []);

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    window.addEventListener("scroll", (e) => {
      if (
        document.body.offsetHeight - window.innerHeight - 1 <=
        window.scrollY
      ) {
        setScrolled(true);
      }
    });

    document.addEventListener("click", () =>
      show === true ? setShow(false) : setShow("")
    );
  }

  return (
    <>
      <HeaderComponent />
      <StudentNoticeBanner />
      <MainDiv>
        <Content>
          <Kind2>
            <div>
              <span>모집공고</span>
              <span>마감 일자순 정렬</span>
            </div>
            <SelectDiv>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(!show);
                }}
              >
                {name.name}
              </div>
              <DataList state={show}>
                {classification.map((e, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setName({
                        name: e.name,
                        content: e.bigClassification.bigClassificationName,
                      });
                      setScrolled(true);
                      setCnt(0);
                      setShow(false);
                      setNotice([]);
                    }}
                  >
                    {e.name}
                  </div>
                ))}
              </DataList>
            </SelectDiv>
            {cnt > 0 ? (
              <>
                <NoticeContainer id="noticeContainer">
                  {notice.length > 0 ? (
                    <>
                      {notice.map((t) => (
                        // eslint-disable-next-line react/jsx-key
                        <StudentNotice info={t} />
                      ))}
                    </>
                  ) : (
                    <>모집 공고가 없습니다..</>
                  )}
                </NoticeContainer>
              </>
            ) : (
              <>
                <NoticePlaceHolder />
                <NoticeContainer
                  id="noticeContainer"
                  style={{ width: "0px" }}
                />
              </>
            )}
          </Kind2>

          <Kind2>
            <div>
              <span>마감된 공고</span>
            </div>
            {cnt > 0 ? (
              <>
                {closedNotice.length > 0 ? (
                  <>
                    {closedNotice.map((t) => (
                      // eslint-disable-next-line react/jsx-key
                      <StudentClosedNotice info={t} />
                    ))}
                  </>
                ) : (
                  <>마감된 공고가 없습니다..</>
                )}
              </>
            ) : (
              <ClosedNoticePlaceHolder />
            )}
          </Kind2>
        </Content>
      </MainDiv>
    </>
  );
};

export default StudentNoticeList;

const MainDiv = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #f8f8f9;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  padding: 0px 12.3vmax;
  display: flex;
`;

const Kind2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  font-size: 1.25vmax;
  position: relative;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    span {
      font-weight: 600;
      font-size: 1.25vmax;
      + span {
        font-weight: 400;
        font-size: 0.88vmax;
      }
    }
  }
`;

const NoticeContainer = styled.div`
  width: 60.2vmax;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 10%;
  /* @media (max-width: 1700px) {
    width: 950px;
    grid-template-columns: repeat(3, 1fr);
  } */
`;

const SelectDiv = styled.div`
  position: absolute;
  top: 4px;
  right: 0.5vmax;

  > div:nth-child(1) {
    width: 10.41vmax;
    height: 3.94vmin;
    border: 2px solid rgba(0, 0, 0, 0.3);
    padding-left: 10px;
    color: ${(props) => props.theme.colors.black};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 0.72vmax;
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
  transition: 1s;
  display: ${(props) => (props.state ? "block" : "none")};
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-radius: 4px;
  max-height: 14.58vmax;
  overflow-y: scroll;
  font-weight: 500;
  &::-webkit-scrollbar {
    display: none;
  }
  div {
    height: 4.48vmin;
    display: flex;
    align-items: center;
    padding-left: 15px;
    font-size: 0.72vmax;
  }

  div:hover {
    background-color: rgba(0, 0, 0, 0.15);
    transition: 0.2s;
  }
`;
