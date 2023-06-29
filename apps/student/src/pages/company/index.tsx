import {
  getCompanyList1,
  getCompanyList1ContentProps,
  getCompanySearch,
} from "../../axios/dist";
import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import StudentCompany from "../../lib/components/student/company";
import StudentCompanyBanner from "../../lib/components/student/companybanner";
import HeaderComponent from "ui/components/StudentHeader";
import StudentCompanyKind from "../../lib/components/student/Kind";
import CompanyPlaceHolder from "../../lib/components/student/detailplaceholder";

const StudentCompanyList = () => {
  const [company, setCompany] = useState<getCompanyList1ContentProps[]>([]);
  const [cnt, setCnt] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(true);
  const [name, setName] = useState<string>("");

  useLayoutEffect(() => {
    const getCompany = () => {
      if (typeof document !== "undefined") {
        const companyContainer = document.getElementById(
          "companyContainer"
        ) as HTMLDivElement;

        if (cnt * 12 >= companyContainer.children.length)
          if (name === "")
            getCompanyList1({ idx: cnt, size: 12 }).then(
              (res: { content: any }) => {
                setCompany((list) => list?.concat(res.content));
                setCnt(cnt + 1);
                setScrolled(false);
              }
            );
          else
            getCompanySearch({ idx: cnt, size: 12, name: name }).then(
              (res: { content: any }) => {
                setCompany((list) => list?.concat(res.content));
                setCnt(cnt + 1);
                setScrolled(false);
              }
            );
        else setScrolled(false);
      }
    };

    if (scrolled) {
      getCompany();
    }
  }, [scrolled, setScrolled]);

  useLayoutEffect(() => {
    setCnt(0);
    setScrolled(true);
    setCompany([]);
  }, [name]);

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
    <FontDiv>
      <HeaderComponent />
      <StudentCompanyBanner name={{ setState: setName }} />
      <MainDiv>
        <StudentCompanyKind />
        <Content>
          {cnt > 0 ? (
            <CompanyContainer id="companyContainer">
              {company.length > 0 ? (
                <>
                  {company.map((t) => (
                    <StudentCompany info={t} />
                  ))}
                </>
              ) : (
                <>회사가 없습니다...</>
              )}
            </CompanyContainer>
          ) : (
            <>
              <CompanyPlaceHolder />
              <CompanyContainer
                id="companyContainer"
                style={{ width: "0px" }}
              />
            </>
          )}
        </Content>
      </MainDiv>
    </FontDiv>
  );
};

export default StudentCompanyList;

const FontDiv = styled.div`
  * {
    font-family: "Pretendard Variable";
  }
`;

const MainDiv = styled.div`
  width: 100vw;
  height: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f9;
`;

const Content = styled.div`
  padding: 0px 25.18vmin;
  display: flex;
`;

const CompanyContainer = styled.div`
  width: 75.2vmax;
  background-color: red;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 12px;
  padding-bottom: 10%;
`;
