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
    { content: "취업현황", link: "/employment" },
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
      <MainDiv>
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
              fill="#6750F8"
              fill-opacity="0.7"
            ></path>
            <path
              d="M5.34647 0L5.34647 16.5179C5.34647 25.6404 12.8268 33.0357 22.0542 33.0357C31.2816 33.0357 38.7619 25.6404 38.7619 16.5179C38.7619 7.3953 31.2816 1.12078e-06 22.0542 7.22019e-07L5.34647 0Z"
              fill="#6750F8"
            ></path>
          </svg>
          <TitleIcon color="#6750F8"/>
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

const MainDiv = styled.div`
  width: 100vw;
  padding: 1.1vmax 13.5vmax;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: #f8f8f9;
  z-index: 99;
  border-bottom: 1px solid rgba(16, 17, 18, 0.5);

  * {
    font-family: "Pretendard Variable";
  }

  > a {
    display: inline-flex;
    align-items: center;
    gap: 0.52vmax;
    cursor: pointer;
    width: 5.6vmax;
  }

  > div {
    font-size: 18px;
    font-weight: 600;
    display: inline-flex;
    gap: 1.8vmax;
    margin-right: 20px;
    a {
      color: rgb(16, 17, 18);
      text-decoration: none;
      cursor: pointer;
      padding-bottom: 3px;
      margin-top: 3px;
      background-size: 0% 100%;
      background-image: linear-gradient(
        transparent calc(100% - 2px),
        #6750f8 2px
      );
      background-repeat: no-repeat;
      transition: all 0.3s ease;
      &:hover {
        color: #6750f8;
        background-size: 100% 100%;
      }
    }
  }
`;
