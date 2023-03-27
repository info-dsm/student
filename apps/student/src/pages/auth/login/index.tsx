import { useEffect, useState } from "react";
import styled from "styled-components";
import StudentAuthBanner from "../../../lib/components/student/authbanner";
import AuthInput from "ui/components/AuthInput";
import StudentAuthTitle from "../../../lib/components/student/Title";
import StudentAuthButton from "../../../lib/components/student/Button";
import { login1, reissue } from "../../../axios/dist";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { Notice } from "@/src/lib/components/student/Alert";

const StudentLogin = () => {
  const router = useRouter();
  const [request, setRequest] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState<{
    email: "normal" | "error";
    password: "normal" | "error";
    emailCode: "normal" | "error";
    name: "normal" | "error";
    studentKey: "normal" | "error";
    githubLink: "normal" | "error";
  }>({
    email: "normal",
    password: "normal",
    emailCode: "normal",
    name: "normal",
    studentKey: "normal",
    githubLink: "normal",
  });

  const changeInput = ({
    e,
    name,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    name: string;
  }) => {
    setRequest({ ...request, [name]: e.target.value });
    setStatus({ ...status, [name]: "normal" });
  };

  const movepage = () => router.push("../");

  useEffect(() => {
    reissue()
      .then(() => {
        movepage();
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <StudentAuthBanner />
      <ModalDiv>
        <StudentAuthTitle
          title={"학생 로그인"}
          subTitle={{
            content1: "",
            content2: "",
            link: "",
          }}
        />
        <AuthInput
          type={status.email}
          placeHolder="이메일을 입력해주세요."
          onChange={changeInput}
          name="email"
        />
        <AuthInput
          type={status.password}
          placeHolder="비밀번호를 입력해주세요."
          onChange={changeInput}
          name="password"
        />
        <StudentAuthButton
          top={117}
          request={request}
          setStatus={setStatus}
          content={{
            content1: "로그인",
            content2: "info가 처음이신가요?",
            content3: "회원가입",
            link: "/auth/signup",
          }}
          clickEvent={() => {
            login1({ email: request.email, password: request.password }, "user")
              .then((res) => {
                cookie.set("accessToken", res.accessToken, { expires: 7 });
                cookie.set("refreshToken", res.refreshToken, { expires: 7 });
                movepage();
              })
              .catch(() => {
                Notice({
                  message: "아이디와 비밀번호가 틀립니다.",
                  state: "error",
                });
              });
          }}
        />
      </ModalDiv>
    </>
  );
};

export default StudentLogin;

const ModalDiv = styled.div`
  width: 480px;
  background-color: #f8f8f9;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 36px;
`;
