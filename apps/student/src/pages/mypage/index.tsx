import {
  getUserInfo,
  getUserInfoProps,
  getSupportStatus,
  getSupportStatusProps,
  reissue,
} from "../../axios/dist";
import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import HeaderComponent from "ui/components/StudentHeader";
import StudentMyPageProfile from "../../lib/components/student/Profile";
import StudentSupportStatus from "../../lib/components/student/SupportStatus";
import cookie from "js-cookie";
// import { Footer } from "ui/components/Footer";

const StudentMyPage = () => {
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
        .catch((err) => {
          setStatus([]);
        });
    }
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainDiv>
        {info && status ? (
          <>
            <div>
              <StudentMyPageProfile info={info} />
              <StudentSupportStatus status={status} />
            </div>
          </>
        ) : (
          <div>
            <StudentMyPageProfile
              info={{
                name: "로그인을 해주세요",
                email: "",
              }}
            />
          </div>
        )}
      </MainDiv>
      {/* <Footer/> */}
    </>
  );
};

export default StudentMyPage;

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #f8f8f9;
  > div {
    min-height: 1000px;
    width: 1448px;
    padding: 150px 100px;
    background-color: #fff;
    box-shadow: 2px 2px 12px -1px rgba(0, 0, 0, 0.22);
  }
`;
