import { useLayoutEffect } from "react";
import cookie from "js-cookie";
import styled, { keyframes } from "styled-components";
import {
  getClassification,
  getClassificationProps,
  getPosition,
  getSupportStatus,
  getSupportStatusProps,
  getUserInfo,
  getUserInfoProps,
} from "@/src/axios/dist";
import { useState } from "react";
import Image from "next/image";
import StatusDetail from "./StatusDetail";
import { GetInitial } from "@/src/lib/func";

const MyInfo = () => {
  const [info, setInfo] = useState<getUserInfoProps>();
  const [status, setStatus] = useState<getSupportStatusProps[]>();
  const [pos, setPos] = useState<string>();
  const [company, setCompany] = useState<string>();
  const [classification, setClassification] = useState<
    getClassificationProps[]
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState<boolean | string>("");

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
      // getPosition().then((res) => {
      //   setPos(res);
      // });
      // getCompanyPreference().then((res) => {
      //   setCompany(res);
      // });
      // getClassification().then((res) => {
      //   setClassification(
      //     [
      //       {
      //         bigClassification: {
      //           bigClassificationName: "전체",
      //         },
      //         name: "전체",
      //       },
      //     ].concat(res)
      //   );
      // });
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
              {/* <div>
                {pos && pos.length > 0 ? pos : "맞춤 포지션을 설정해주세요."}
              </div>

              <div>
                {company && company.length > 0
                  ? company
                  : "희망하는 기업 규모를 선택해주세요."}
              </div> */}
              <button>정보 수정하기</button>
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
        <Apply>
          <div>지원현황</div>
          {status && status.length > 0 ? (
            <ApplyDiv>
              {status.map((t, i) => (
                <StatusDetail t={t} />
              ))}
            </ApplyDiv>
          ) : (
            <Empty>지원한 이력이 없습니다..</Empty>
          )}
        </Apply>
      </div>
    </MainDiv>
  );
};
export default MyInfo;

const ApplyDiv = styled.div`
  width: 100%;
  padding: 12px;
  height: 87.25%;
  border-radius: 24px;
  background-color: #f6f6f6;
  overflow-y: scroll;

  > div {
    width: 100%;
    height: 74px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 8px;
    display: inline-flex;
    justify-content: space-between;
    padding: 24px;
    > div {
      display: inline-flex;
      align-items: center;
      gap: 15px;
    }
  }
`;

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
  img {
    width: 15.625vmax;
    height: 15.625vmax;
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
    color: #ffffffaa;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  button {
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

const Apply = styled.div`
  width: 37.65vmax;
  height: 35.2vmax;
  background-color: #f6f6f6;
  border-radius: 25px;
  > div:nth-child(1) {
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

const SelectDiv = styled.div`
  position: absolute;
  top: 4px;
  right: 0.8vmax;
`;
const FadeInDataList = keyframes`
0% {
    transform: translateY(-50px);
    opacity: 0;
}100% {
    transform: translateY(0);
    opacity: 1;
}
`;

const DataList = styled.div<{ state: boolean | string }>`
  position: absolute;
  animation: ${FadeInDataList} 0.5s;
  width: 100%;
  z-index: 2;
  transition: 1s;
  display: ${(props) => (props.state ? "block" : "none")};
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-radius: 4px;
  max-height: 14.58vmax;
  overflow-y: scroll;
  font-weight: 500;

  &::-webkit-scrollbar {
    display: none;
  }
  div {
    height: 4.48vmin;
    display: flex;
    align-items: center;
    padding-left: 15px;
    font-size: 0.72vmax;
    transition: 0.2s;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
  .hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

const SearchInput = styled.input`
  width: 10.41vmax;
  height: 3.94vmin;
  border: 2px solid rgba(0, 0, 0, 0.3);
  padding-left: 10px;
  color: ${(props) => props.theme.colors.black};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 0.72vmax;
  font-weight: 500;
`;
