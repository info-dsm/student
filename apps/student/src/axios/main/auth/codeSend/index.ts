import { Notice } from "@/src/lib/components/student/Alert";
import request from "../../";

export const codeSend = async ({ email }: { email: string }) => {
  await request({
    method: "PUT",
    url: "/auth/code",
    params: {
      email: email,
    },
  }).then(() => {
    Notice({
      message: "인증번호가 발송되었습니다.",
      state: "success",
    });
  })
  .catch(() => {
    Notice({
      message: "이미 있는 사용자입니다.",
      state: "error",
    });
  });
};
