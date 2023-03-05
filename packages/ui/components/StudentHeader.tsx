import React from "react";
import styled from "styled-components";
import TitleIcon from "../images/title";

const HeaderComponent = () => {
  const nav = [
    { content: "회사", link: "/company" },
    { content: "모집공고", link: "/notice" },
    {
      content: "내정보",
      link: "/mypage",
    },
    {
      content: "로그인",
      link: "/auth/login",
    },
    // { content: "개발팀", link: "" },
  ];

  return (
    <>
      <MainDiv>
        <a href="/">
          <TitleIcon />
        </a>
        <div>
          {nav.map((t) => (
            <a href={t.link}>{t.content}</a>
          ))}
        </div>
      </MainDiv>
    </>
  );
};

export default HeaderComponent;

const MainDiv = styled.div`
  width: 100vw;
  padding: 22px 136px;
  display: inline-flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(16, 17, 18, 0.5);
  backdrop-filter: blur(9px);
  > div {
    font-size: 15px;
    font-weight: 600;
    display: inline-flex;
    gap: 35px;
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
    }
  }
`;
