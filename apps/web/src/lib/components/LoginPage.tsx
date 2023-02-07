import { Modal, InputText, Password } from "ui";
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { login } from "../../axios/dist/index";
import cookie from "js-cookie";
import request from "../../axios/main";
const LoginPage = ({
  member,
  comment,
  path,
}: {
  member: boolean;
  comment: string;
  path: { signUp: string; direct: string };
}) => {
  const router = useRouter();
  const [error, setError] = useState<{ error: boolean; comment: string }>({
    error: false,
    comment: "",
  });
  const [data, setData] = useState<
    | { email: string; password: string }
    | { companyNumber: string; password: string }
  >(
    member
      ? {
          email: "",
          password: "",
        }
      : { companyNumber: "", password: "" }
  );
  const ChangeInput = useCallback(
    (e: string, props: string) => {
      setData({ ...data, [props]: e });
    },
    [data]
  );
  const ClearError = useCallback(() => {
    setError({ error: false, comment: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, setError]);
  const Submit = () => {
    login(data, member ? "user" : "company")
      .then((res: { accessToken: string; refreshToken: string }) => {
        console.log(res);
        request.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.accessToken}`;
        cookie.set("accessToken", res.accessToken, { expires: 7 });
        cookie.set("refreshToken", res.refreshToken, { expires: 7 });
        router.push("/teacher/notice");
      })
      .catch((err) => {
        console.log(err);
        setError({
          error: true,
          comment: err.response
            ? err.response.data.message
            : "서버 에러입니다.",
        });
      });
  };
  return (
    <>
      <Modal
        onClick={() => router.push("/")}
        href={() => {
          window.alert("서비스 준비 중입니다.");
        }}
        bottom={{
          text: "info가 처음이신가요?",
          direct: member ? "회원가입" : "회사등록",
        }}
        confirm={"로그인"}
        {...{ comment }}
        move={() => router.push("/teacher/signup")}
        onSubmit={() => Submit()}
      >
        <_Layout>
          <InputText
            placeholder={
              member
                ? "이메일을 입력해주세요."
                : "사업자번호를 입력해주세요. ex) 000-00-00000"
            }
            {...{ error: error.error }}
            onInput={(e) =>
              ChangeInput(e.target.value, member ? "email" : "companyNumber")
            }
            onFocus={() => ClearError()}
          />
          <Password
            placeholder={"비밀번호를 입력해주세요."}
            {...{ error: error.error }}
            onInput={(e) => ChangeInput(e.target.value, "password")}
            onFocus={() => ClearError()}
          />
          <_ErrorComent>{error.comment}</_ErrorComent>
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
  color: ${({ theme }) => theme.colors.red};
`;
