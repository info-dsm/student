import styled from "styled-components";
import TitleIcon from "../images/title";
import cookie from "js-cookie";
import { useRouter } from "next/router";

const HeaderComponent = () => {
  const router = useRouter();
  const nav = [
    { content: "공지사항", link: "/announcement" },
    { content: "기업정보", link: "/company" },
    { content: "모집공고", link: "/notice" },
    !cookie.get("accessToken")
      ? {
          content: "로그인",
          link: "/auth/login",
        }
      : {
          content: "로그아웃",
          link: "",
        },
  ];

  return (
    <>
      <MainDiv
        background={
          // router.pathname === "/"
          true
        }
      >
        <a
          onClick={() => {
            router.push("/");
          }}
        >
          <svg
            width="34"
            height="32"
            viewBox="0 0 39 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2.64286H17.376C26.9725 2.64286 34.752 10.334 34.752 19.8214C34.752 29.3089 26.9725 37 17.376 37C7.77951 37 0 29.3089 0 19.8214V2.64286Z"
              fill="white"
              fill-opacity="0.7"
            ></path>
            <path
              d="M5.34647 0L5.34647 16.5179C5.34647 25.6404 12.8268 33.0357 22.0542 33.0357C31.2816 33.0357 38.7619 25.6404 38.7619 16.5179C38.7619 7.3953 31.2816 1.12078e-06 22.0542 7.22019e-07L5.34647 0Z"
              fill="white"
            ></path>
          </svg>
          <TitleIcon />
        </a>
        <div>
          {nav.map((t) => (
            <a
              onClick={() => {
                if (t.content === "로그아웃") {
                  cookie.remove("accessToken");
                  cookie.remove("refreshToken");
                  window.location.href = "/";
                } else router.push(t.link);
              }}
            >
              {t.content}
            </a>
          ))}
        </div>
      </MainDiv>
    </>
  );
};

export default HeaderComponent;

const MainDiv = styled.div<{ background: boolean }>`
  width: 100vw;
  padding: 1.1vmax 12.3vmin;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.background ? "rgba(16, 17, 18, 0.5)" : "transparent"};
  backdrop-filter: blur(9px);
  z-index: 99;

  > a {
    display: inline-flex;
    align-items: center;
    gap: 0.52vmax;
    cursor: pointer;
    width: 5.6vmax;
  }

  > div {
    font-size: 0.78vmax;
    font-weight: 600;
    display: inline-flex;
    gap: 1.8vmax;
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      cursor: pointer;

      background-size: 0% 100%;
      background-image: linear-gradient(
        transparent calc(100% - 2px),
        ${(props) => props.theme.colors.white} 2px
      );
      background-repeat: no-repeat;
      transition: background-size 0.3s;
      &:hover {
        background-size: 100% 100%;
      }
    }
  }
`;
