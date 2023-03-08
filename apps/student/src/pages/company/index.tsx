import { getCompanyList1, getCompanyList1ContentProps } from "../../axios/dist";
import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import StudentCompany from "../../lib/components/student/company";
import StudentCompanyBanner from "../../lib/components/student/companybanner";
import HeaderComponent from "ui/components/StudentHeader";
import StudentCompanyKind from "../../lib/components/student/Kind";
import CompanyPlaceHolder from "../../lib/components/student/detailplaceholder";
import { useRouter } from "next/router";

const StudentCompanyList = () => {
  const router = useRouter();
  const [company, setCompany] = useState<getCompanyList1ContentProps[]>([]);
  const [cnt, setCnt] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(true);

  useLayoutEffect(() => {
    const getCompany = () => {
      const companyContainer = document.getElementById(
        "companyContainer"
      ) as HTMLDivElement;

      if (cnt * 15 === companyContainer.children.length)
        getCompanyList1({ idx: cnt, size: 15 }).then(
          (res: { content: any }) => {
            setCompany((list) => list?.concat(res.content));
            setCnt(cnt + 1);
            setScrolled(false);
          }
        );
      else setScrolled(false);
    };

    if (scrolled) {
      getCompany();
    }
  }, [scrolled, setScrolled]);

  window.addEventListener("scroll", (e) => {
    if (document.body.offsetHeight - window.innerHeight === window.scrollY) {
      setScrolled(true);
    }
  });

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
              <CompanyPlaceHolder />
              <CompanyContainer
                id="companyContainer"
                style={{ width: "0px" }}
              />
            </>
          )}
        </Content>
      </MainDiv>
    </>
  );
};

export default StudentCompanyList;

const MainDiv = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
  }
`;
