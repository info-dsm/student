import { Modal, InputText, Password } from "ui";
import React, { useState, useCallback } from "react";
import Background from "./Background";
import styled from "styled-components";
import { useRouter } from "next/router";
const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const ChangeInput = useCallback(
    (e: string, props: string) => {
      setData({ ...data, [props]: e });
    },
    [data]
  );
  const ClearError = useCallback(() => {
    setError(false);
  }, [error, setError]);
  const Submit = () => {
    console.log("submit");
  };
  return (
    <>
      <Background />
      <Modal
        onClick={() => router.push("/")}
        href={() => {}}
        text={"info가 처음이신가요?"}
        direct={"회원가입"}
        move={() => router.push("/teacher/signup")}
        onSubmit={() => Submit()}
      >
        <_Layout>
          <InputText
            placeholder={"이메일을 입력해주세요."}
            {...{ error }}
            onInput={(e) => ChangeInput(e.target.value, "email")}
            onFocus={() => ClearError()}
          />
          <Password
            placeholder={"비밀번호를 입력해주세요."}
            {...{ error }}
            onInput={(e) => ChangeInput(e.target.value, "password")}
            onFocus={() => ClearError()}
          />
          <_ErrorComent>
            {error ? "아이디 혹은 비밀번호가 일치하지 않습니다." : ""}
          </_ErrorComent>
        </_Layout>
      </Modal>
    </>
  );
};
export default LoginPage;
const _Layout = styled.div`
  margin: 46px 0 89px 0;
  height: 196px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const _ErrorComent = styled.div`
  font: 500 13px "Pretendard";
  line-height: 16px;
`;
