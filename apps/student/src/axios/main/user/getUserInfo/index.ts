import Cookies from "js-cookie";
import cookie from "js-cookie";
import request from "../..";

export interface getUserInfoProps {
  name: string;
  email: string;
  profilePhotoLink: string | null;
}

export const getUserInfo = async () => {
  if (typeof window !== "undefined") {
    if (cookie.get("accessToken")) {
      const data = await request({
        method: "get",
        url: "/user/info",
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      });
      return data;
    }
  }
  return {
    name: "",
    email: "",
  };
};
