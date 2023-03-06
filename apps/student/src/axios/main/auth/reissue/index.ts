import cookie from "js-cookie";
import request from "../../";
import { useRouter } from "next/router";

export const reissue = async () => {
  const router = useRouter();
  const res: any = await request
    .put("/auth/reissue", {
      accessToken: cookie.get("accessToken"),
      refreshToken: cookie.get("refreshToken"),
    })
    .catch(() => {
      router.push("/auth/login");
    });
  request.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${res.accessToken}`;
  cookie.set("accessToken", res.accessToken, { expires: 7 });
  cookie.set("refreshToken", res.refreshToken, { expires: 7 });
};
