import request from "../..";
export interface login1Props {
  accessToken: string;
  refreshToken: "string";
}
export const login1 = async (
  data: { email?: string; password: string },
  endpoint: string
) => {
  const res: login1Props = await request({
    method: "post",
    url: `/auth/login/${endpoint}`,
    data: data,
  });
  return res;
};
