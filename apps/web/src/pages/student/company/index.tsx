import { getCompanyList, getCompanyListContentProps } from "apis";
import styled from "styled-components";
import { useState, useEffect } from "react";
import StudentCompany from "./company";
import StudentCompanyBanner from "./banner";
import HeaderComponent from "ui/components/StudentHeader";
import StudentCompanyKind from "./Kind";
import CompanyPlaceHolder from "./placeholder";

const StudentCompanyList = () => {
  const [company, setCompany] = useState<getCompanyListContentProps[]>([]);
  const [cnt, setCnt] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(true);

  useEffect(() => {
    const getCompany = () => {
      if (typeof document !== "undefined") {
        const companyContainer = document.getElementById(
          "companyContainer"
        ) as HTMLDivElement;

        if (cnt * 15 === companyContainer.children.length)
          getCompanyList({ idx: cnt, size: 15 }).then((res) => {
            setCompany((list) => list?.concat(res.content));
            setCnt(cnt + 1);
            setScrolled(false);
          });
        else setScrolled(false);
      }
    };

    if (scrolled) {
      getCompany();
    }
  }, [scrolled, setScrolled]);

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    window.addEventListener("scroll", (e) => {
      if (document.body.offsetHeight - window.innerHeight === window.scrollY) {
        setScrolled(true);
      }
    });
  }

  return (
    <>
      <HeaderComponent />
      <StudentCompanyBanner />
      <MainDiv>
        <StudentCompanyKind />
        <Content>
            {company.length > 0 ? (
             <CompanyContainer id="companyContainer">
                {company.map((t) => (
                  <StudentCompany info={t} />
                ))}
              </CompanyContainer>
            ) : (
              <>
                <CompanyPlaceHolder/>
                <CompanyContainer id="companyContainer" style={{width: "0px"}}/>
              </>
            )}
        </Content>
      </MainDiv>
    </>
  );
};

export default StudentCompanyList;

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f8f9;
`;

const Content = styled.div`
  padding: 0px 236px;
  display: flex;
`;

const CompanyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 12px;
  padding-bottom: 10%;
`;
