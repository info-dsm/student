import request from "../..";

export const codeCheck = async ({
  email,
  data,
  type,
}: {
  email: string;
  data: string;
  type:
    | "SIGNUP_EMAIL"
    | "CHANGE_EMAIL"
    | "CHANGE_PASSWORD"
    | "TEACHER"
    | "REFRESH";
}) => {
  const data1: boolean = await request({
    method: "POST",
    url: "/auth/code",
    data: {
      email: email,
      data: data,
      type: type,
    },
  });

  return data1;
};
