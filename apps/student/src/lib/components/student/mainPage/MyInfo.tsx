import { useLayoutEffect } from "react";
import cookie from "js-cookie";
import styled from "styled-components";
import { getUserInfo, getUserInfoProps } from "@/src/axios/dist";
import { useState } from "react";
import Image from "next/image";
import MyInfoApply from "./Apply";
import MyInfoPrefer from "./MyInfoPrefer";
import { useRouter } from "next/router";

const MyInfo = ({
  fix,
}: {
  fix: {
    state: boolean;
    setState: (value: boolean) => void;
  };
}) => {
  const [info, setInfo] = useState<getUserInfoProps>();
  const router = useRouter();

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && cookie.get("accessToken")) {
      getUserInfo().then((res) => {
        setInfo(res as getUserInfoProps);
      });
    }
  }, []);

  return (
    <MainDiv id="myinfo">
      <div>
        <Profile>
          {info ? (
            <>
              <Image
                src={
                  info.profilePhotoLink
                    ? info.profilePhotoLink
                    : "https://cdn.discordapp.com/attachments/1071077149605384262/1103215142952513546/user.png"
                }
                alt="프로필 사진"
                width={300}
                height={300}
                object-fit={"cover"}
              />
              <h1>{info.name}</h1>
              <hr />
              <div style={{ zIndex: 2 }}>
                <MyInfoPrefer
                  fix={fix.state}
                  defaultName={"맞춤 포지션을 설정해주세요."}
                />
              </div>

              <div>
                <MyInfoPrefer
                  fix={fix.state}
                  defaultName={"희망하는 기업 규모를 선택해주세요."}
                />
              </div>
              <button
                onClick={() => {
                  fix.setState(!fix.state);
                  if (fix.state) router.push("#notice");
                }}
              >
                {fix.state ? "완료" : "정보 수정하기"}
              </button>
            </>
          ) : (
            <>
              <img
                src="https://cdn.discordapp.com/attachments/1071077149605384262/1103215142952513546/user.png"
                alt=""
              />
              <h1>로그인 해주세요</h1>
            </>
          )}
        </Profile>
        <MyInfoApply />
      </div>
    </MainDiv>
  );
};
export default MyInfo;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #241b58;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 70%;
    display: inline-flex;
    justify-content: space-between;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 26.04vmax;
  position: relative;
  > img {
    width: 15.625vmax;
    height: 15.625vmax;
    border-radius: 50%;
  }

  > h1 {
    font-size: 64px;
    color: #fff;
    margin-bottom: 0;
  }

  > hr {
    width: 30px;
    height: 1px;
    background-color: #ffffff80;
    border: none;
    margin: 25px;
  }
  > div {
    color: #ffffffaa;
    font-size: 28px;
    font-weight: 600;
    position: relative;
    margin: 10px 0;
  }
  > button {
    margin-top: 13px;
    padding: 10px 23px;
    background-color: #ffffff98;
    color: #121212;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    border-radius: 24px;
    border: none;
  }
`;
