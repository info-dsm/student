import styled from "styled-components";
import StudentBanner from "../lib/components/student/Banner";
import StudentMainNoticeContainer from "../lib/components/student/NoticeContainer";
import TextBox from "../lib/components/student/TextBox";
import React, { useLayoutEffect, useState } from "react";
import { getCompanyList1, getCompanyList1ContentProps } from "../axios/dist";
import HeaderComponent from "ui/components/StudentHeader";

const StudentPage = () => {
  const [companyKind, setCompanyKind] =
    useState<getCompanyList1ContentProps[]>();

  useLayoutEffect(() => {
    getCompanyList1({ idx: 0, size: 12 }).then((res) => {
      setCompanyKind(res.content);
    });
  }, []);
  return (
    <>
      <HeaderComponent />
      <StudentBanner />
      <ContainerDiv>
        <TextBox
          top={75}
          bottom={109}
          title={"여러 회사를 둘러보세요"}
          subTitle={
            "회사 정보에서 면접후기와 그 사업체에 취직한 학생 등을 알아볼 수 있어요."
          }
          arrow={{
            text: "회사 둘러보기",
            link: "company",
          }}
        />

        <GridDiv>
          {companyKind?.map((t) => (
            // eslint-disable-next-line react/jsx-key
            <a href={`company/detail/${t.companyNumber}`}>
              <ImageDiv
                url={
                  t.companyIntroductionResponse.companyLogo.fileUrl
                    ? t.companyIntroductionResponse.companyLogo.fileUrl
                    : ""
                }
              ></ImageDiv>
            </a>
          ))}
        </GridDiv>

        <TextBox
          top={375}
          bottom={226}
          title={"모집공고에서 취업에 기회를 잡아봐요!"}
          subTitle={`적군, 자격요건, 회사상황, 전형절차, 복리후생 등 \n
            여러 조건을 확인 할 수 있어요.`}
          arrow={{
            text: "모집공고 둘러보기",
            link: "notice",
          }}
        />
      </ContainerDiv>
      <StudentMainNoticeContainer />
    </>
  );
};

export default StudentPage;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 55px;
  grid-column-gap: 30px;
`;

const ImageDiv = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  width: 224px;
  height: 105px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
  border-radius: 5px;
`;

const ContainerDiv = styled.div`
  width: 100vw;
  padding: 0px 440px;
  background-color: #101112;
`;
