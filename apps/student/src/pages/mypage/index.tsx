import {
  getUserInfo,
  getUserInfoProps,
  getSupportStatus,
  getSupportStatusProps,
} from "../../axios/dist";
import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import HeaderComponent from "ui/components/StudentHeader";
import StudentMyPageProfile from "../../lib/components/student/Profile";
import StudentSupportStatus from "../../lib/components/student/SupportStatus";
import cookie from "js-cookie";
import { Footer } from "ui/components/Footer";
import { Spinner } from "@/../../packages/ui/dist";

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
      {info && status ? (
        <>
          <HeaderComponent />
          <MainDiv>
            <>
              <div>
                <StudentMyPageProfile info={info} />
                <StudentSupportStatus status={status} />
              </div>
            </>
          </MainDiv>
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
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
    min-height: 52.08vmin;
    width: 75.41vmax;
    padding: 150px 100px;
    background-color: #fff;
    box-shadow: 2px 2px 12px -1px rgba(0, 0, 0, 0.22);
  }
`;
