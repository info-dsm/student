import {
  getClassification,
  getClassificationNotice,
  getClassificationProps,
  getClosedNoticeList,
  getClosedNoticeListContentProps,
  getNoticeCompanySearch,
  getNoticeSearch,
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
import { GetInitial } from "@/src/lib/func";
import MegaPhoneV2 from "@/src/lib/components/student/MegaPhoneV2";

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
  const [name, setName] = useState<{
    companyName: string;
    smallClassification: string;
  }>({
    companyName: "",
    smallClassification: "전체",
  });
  const [inputValue, setInputValue] = useState("");
  const [current, setCurrent] = useState(-1);

  useLayoutEffect(() => {
    const getNotice = () => {
      if (typeof document !== "undefined") {
        const companyContainer = document.getElementById(
          "noticeContainer"
        ) as HTMLDivElement;

        if (cnt * 9 === companyContainer.children.length || cnt === 0)
          if (name.companyName === "" && name.smallClassification === "전체")
            getWaitingNoticeList({ idx: cnt, size: 9 }).then((res) => {
              setNotice((list) => list?.concat(res.content));
              setCnt(cnt + 1);
              setScrolled(false);
              getClosedNoticeList({
                idx: cnt,
                size: 6,
                status: "APPROVE",
              }).then((res) => {
                setClosedNotice((list) => list?.concat(res.content));
              });
            });
          else {
            let params: {
              idx: number;
              size: number;
              companyName?: string;
              smallClassification?: string;
            } = {
              idx: cnt,
              size: 9,
            };
            params =
              name.companyName !== ""
                ? { ...params, ["companyName"]: name.companyName }
                : { ...params };
            params =
              name.smallClassification !== "전체"
                ? {
                    ...params,
                    ["smallClassification"]: name.smallClassification,
                  }
                : { ...params };

            getNoticeSearch({ params }).then((res) => {
              setNotice((list) => list?.concat(res.content));
              setCnt(cnt + 1);
              setScrolled(false);
            });
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

  useEffect(() => {
    if (document.querySelectorAll(".noticeFilter")[current]) {
      const notice = document.querySelectorAll(
        ".noticeFilter"
      ) as unknown as HTMLDivElement[];

      notice.forEach((e, i) => {
        if (current === i) notice[current].classList.add("hover");
        else notice[i].classList.remove("hover");
      });
    }
  }, [current]);

  return (
    <FontDiv>
      <HeaderComponent />
      <StudentNoticeBanner />
      <MegaPhoneV2 />
      <MainDiv>
        <Content>
          <Kind2>
            <div>
              <span>모집공고</span>
            </div>
            <CompanyInput>
              <SearchInput
                placeholder="회사 이름 검색"
                onChange={(e) =>
                  setName({ ...name, ["companyName"]: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    setScrolled(true);
                    setCnt(0);
                    setShow(false);
                    setNotice([]);
                    setClosedNotice([]);
                  }
                }}
              />
            </CompanyInput>
            <SelectDiv>
              <SearchInput
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(!show);
                  setCurrent(-1);
                  // console.log("가".charCodeAt(0));
                  // console.log("깋".charCodeAt(0));
                  // console.log("힣".charCodeAt(0));
                }}
                onKeyDown={(e) => {
                  if (
                    e.keyCode === 40 &&
                    document.querySelectorAll(".noticeFilter")[current + 1]
                  )
                    setCurrent(current + 1);
                  if (e.keyCode === 38 && current > 0) setCurrent(current - 1);
                  if (e.keyCode === 13) {
                    if (
                      document.querySelectorAll(".noticeFilter")[
                        current === -1 ? 0 : current
                      ]
                    ) {
                      const notice = document.querySelectorAll(".noticeFilter")[
                        current === -1 ? 0 : current
                      ] as HTMLDivElement;
                      setName({
                        ...name,
                        ["smallClassification"]: notice.dataset.name as string,
                      });
                    }
                    setScrolled(true);
                    setCnt(0);
                    setShow(false);
                    setNotice([]);
                    setClosedNotice([]);
                  }
                }}
                onChange={(e) => {
                  setCurrent(-1);
                  setShow(true);
                  setInputValue(
                    e.target.value.toUpperCase().replace(/(\s*)/g, "")
                  );
                }}
                placeholder={name.smallClassification}
              ></SearchInput>
              <DataList state={show}>
                {classification.map((e, i) => (
                  <>
                    {GetInitial(e.name.replace(/(\s*)/g, "")).includes(
                      inputValue
                    ) || e.name.replace(/(\s*)/g, "").includes(inputValue) ? (
                      <div
                        key={i}
                        className="noticeFilter"
                        onClick={() => {
                          setName({
                            ...name,
                            ["smallClassification"]: e.name,
                          });
                          setScrolled(true);
                          setCnt(0);
                          setShow(false);
                          setNotice([]);
                          setClosedNotice([]);
                        }}
                        data-name={e.name}
                      >
                        {e.name}
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
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
                    <>모집 공고가 없습니다...</>
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
    </FontDiv>
  );
};

export default StudentNoticeList;

const FontDiv = styled.div`
  * {
    font-family: "Pretendard Variable";
  }
`;

const CompanyInput = styled.div`
  position: absolute;
  right: 12vmax;
  top: 4px;
`;

const SearchInput = styled.input`
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
`;

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
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 10%;
  /* @media (max-width: 1700px) {
    width: 950px;
    grid-template-columns: repeat(3, 1fr);
  } */
`;

const SelectDiv = styled.div`
  position: absolute;
  top: 4px;
  right: 0.8vmax;
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
    transition: 0.2s;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
  .hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
