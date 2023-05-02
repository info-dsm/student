import { useLayoutEffect } from "react";
import cookie from "js-cookie";
import styled from "styled-components";
import {
  getSupportStatus,
  getSupportStatusProps,
  getUserInfo,
  getUserInfoProps,
} from "@/src/axios/dist";
import { useState } from "react";
import Image from "next/image";

const MyInfo = () => {
  const [info, setInfo] = useState<getUserInfoProps>();
  const [status, setStatus] = useState<getSupportStatusProps[]>();

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && cookie.get("accessToken")) {
      getUserInfo().then((res) => {
        setInfo(res as getUserInfoProps);
      });
      getSupportStatus()
        .then((res) => {
          setStatus(res as getSupportStatusProps[]);
        })
        .catch(() => {
          setStatus([]);
        });
    }
  }, []);

  return (
    <MainDiv>
      <div>
        <Profile>
          {info && status ? (
            <>
              <Image
                src={info.profilePhotoLink}
                alt="프로필 사진"
                width={300}
                height={300}
                object-fit={"cover"}
              />
              <h1>{info.name}</h1>
              <hr />
              {/* <div>프론트엔드 개발자</div> */}
              <div>{info.email}</div>
            </>
          ) : (
            <>
              <img src="" alt="" />
              <h1>이동현</h1>
              <hr />
              <div>프론트엔드 개발자</div>
              <div>ldh7228@gmail.com</div>
            </>
          )}
        </Profile>
        <Apply>
          <div>지원현황</div>
          <Empty>지원한 이력이 없습니다..</Empty>
        </Apply>
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
  width: 500px;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  h1 {
    font-size: 64px;
    color: #fff;
    margin-bottom: 0;
  }

  hr {
    width: 30px;
    height: 1px;
    background-color: #ffffff80;
    border: none;
    margin: 25px;
  }
  div {
    margin-bottom: 17px;
    color: #ffffff58;
    font-size: 28px;
    font-weight: 600;
  }
`;

const Apply = styled.div`
  width: 723px;
  height: 676px;
  background-color: #fff;
  border-radius: 25px;
  div:nth-child(1) {
    height: 13.75%;
    width: 100%;
    background-color: #5850b260;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: 700;
    color: #241b58;
  }
`;

const Empty = styled.div`
  height: 87.25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #241b58;
`;
