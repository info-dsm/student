import {
  getCompanyList1ContentProps,
  getCompanyList1Props,
  getCompanySearch,
} from "../../axios/dist";
import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import StudentCompany from "../../lib/components/student/company";
import StudentCompanyBanner from "../../lib/components/student/companybanner";
import HeaderComponent from "ui/components/StudentHeader";
import StudentCompanyKind from "../../lib/components/student/Kind";
import { useRouter } from "next/router";

const StudentSearchCompanyList = () => {
  const q = useRouter().query.id as string;
  const [company, setCompany] = useState<getCompanyList1ContentProps[]>();
  const [cnt, setCnt] = useState<number>(1);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useLayoutEffect(() => {
    const getCompany = () => {
      if (typeof document !== "undefined") {
        const companyContainer = document.getElementById(
          "companyContainer"
        ) as HTMLDivElement;

        if (cnt * 15 === companyContainer.children.length)
          getCompanySearch({ name: q, idx: cnt, size: 15 }).then((res) => {
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
          <CompanyContainer id="companyContainer">
            {company ? (
              <>
                {company.map((t) => (
                  <>
                    <StudentCompany info={t} />
                  </>
                ))}
              </>
            ) : (
              <>
                <div>ㅤ</div>
              </>
            )}
          </CompanyContainer>
        </Content>
      </MainDiv>
    </>
  );
};

export default StudentSearchCompanyList;

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
