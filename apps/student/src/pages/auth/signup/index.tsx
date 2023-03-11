import styled from "styled-components";
import AuthInput from "ui/components/AuthInput";
import StudentAuthBanner from "../../../lib/components/student/authbanner";
import StudentAuthTitle from "../../../lib/components/student/Title";
import { useState, useLayoutEffect } from "react";
import StudentAuthButton from "../../../lib/components/student/Button";
import { codeSend, codeCheck, studentSignUp } from "../../../axios/dist";
import StudentAuthKind from "../../../lib/components/student/signupKind";
import { useRouter } from "next/router";

const StudentSignUp = () => {
  const router = useRouter();
  const [request, setRequest] = useState<{
    email: string;
    password: string;
    emailCode: string;
    name: string;
    studentKey: string;
    githubLink: string;
    passwordCheck: string;
  }>({
    emailCode: "",
    email: "",
    password: "",
    name: "",
    studentKey: "",
    githubLink: "",
    passwordCheck: "",
  });

  const [status, setStatus] = useState<{
    email: "normal" | "error";
    password: "normal" | "error";
    emailCode: "normal" | "error";
    name: "normal" | "error";
    studentKey: "normal" | "error";
    githubLink: "normal" | "error";
    passwordCheck: "normal" | "error";
  }>({
    email: "normal",
    password: "normal",
    emailCode: "normal",
    name: "normal",
    studentKey: "normal",
    githubLink: "normal",
    passwordCheck: "normal",
  });

  const [checkStatus, setCheckStatus] = useState<{
    email: "unChecked" | "checked" | "failed";
    // student: "unChecked" | "checked" | "failed";
    password: "unChecked" | "checked" | "failed";
  }>({
    email: "unChecked",
    // student: "unChecked",
    password: "unChecked",
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

  useLayoutEffect(() => {
    if (request.password !== request.passwordCheck)
      setCheckStatus({ ...checkStatus, password: "failed" });
    else {
      setCheckStatus({ ...checkStatus, password: "unChecked" });
      if (request.password.length > 0) {
        setCheckStatus({ ...checkStatus, password: "checked" });
      }
    }
  }, [request, setRequest]);

  const movePage = () => {
    router.push("/auth/login");
  };

  return (
    <>
      <StudentAuthBanner />
      <ModalDiv>
        <StudentAuthTitle
          title={"학생 회원가입"}
          subTitle={{
            content1: "대덕 선생님이신가요?",
            content2: "교사 전용 로그인",
            link: "https://teacher.info-dsm.info/login/",
          }}
        />
        <StudentAuthKind status={checkStatus.email} content={"이메일"} />
        <AuthInput
          type={status.email}
          placeHolder="이메일을 입력해주세요."
          onChange={changeInput}
          name="email"
          subClick={{
            content: "인증번호 발송",
            event: () => {
              if (request.email !== "") {
                codeSend({ email: request.email })
                  .then(() => {
                    alert("인증번호가 발송되었습니다.");
                  })
                  .catch(() => {
                    alert("이미 있는 사용자입니다.");
                  });
              } else setStatus({ ...status, email: "error" });
            },
          }}
        />
        <AuthInput
          type={status.emailCode}
          placeHolder="인증번호를 입력해주세요."
          onChange={changeInput}
          name="emailCode"
          subClick={{
            content: "인증번호 확인",
            event: () => {
              if (request.emailCode !== "")
                codeCheck({
                  email: request.email,
                  data: request.emailCode,
                  type: "SIGNUP_EMAIL",
                })
                  .then(() => {
                    setCheckStatus({ ...checkStatus, email: "checked" });
                  })
                  .catch(() => {
                    setCheckStatus({ ...checkStatus, email: "failed" });
                  });
              else setStatus({ ...status, emailCode: "error" });
            },
          }}
        />
        <StudentAuthKind content={"이름 • 학번"} />
        <AuthInput
          type={status.name}
          placeHolder="이름을 입력해주세요."
          onChange={changeInput}
          name="name"
        />
        <AuthInput
          type={status.studentKey}
          placeHolder="학번을 입력해주세요."
          onChange={changeInput}
          name="studentKey"
          // subClick={{
          //   content: "학번 중복 확인",
          //   event: () => {

          //   },
          // }}
        />
        <StudentAuthKind status={checkStatus.password} content={"비밀번호"} />
        <AuthInput
          type={status.password}
          placeHolder="비밀번호를 입력해주세요."
          onChange={changeInput}
          name="password"
        />
        <AuthInput
          type={status.passwordCheck}
          placeHolder="비밀번호를 재입력해주세요."
          onChange={changeInput}
          name="passwordCheck"
        />
        <StudentAuthKind content={"깃허브 주소"} />
        <AuthInput
          type={status.githubLink}
          placeHolder="깃허브 주소를 입력해주세요."
          onChange={changeInput}
          name="githubLink"
        />
        <StudentAuthButton
          top={20}
          request={request}
          setStatus={setStatus}
          content={{
            content1: "가입",
            content2: "기존 회원이신가요?",
            content3: "로그인",
            link: "/auth/login",
          }}
          check={checkStatus}
          clickEvent={() => {
            studentSignUp({ req: request })
              .then((res) => {
                movePage();
              })
              .catch(() => {
                alert("계정이 성공적으로 생성되지 않았습니다.");
              });
          }}
        />
      </ModalDiv>
    </>
  );
};

export default StudentSignUp;

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
