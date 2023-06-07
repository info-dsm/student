// axios instance 를 생성해주었습니다.
import axios from "axios";
import cookie from "js-cookie";
import { reissue } from "../dist";
import { Notice } from "@/src/lib/components/student/Alert";
const request = axios.create({
  baseURL: "https://api.info-dsm.info/",
});
const accessToken = cookie.get("accessToken");
if (accessToken !== undefined) {
  request.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error.response.status === 500 ||
      error.response.status === 403 ||
      error.response.status === 401
    ) {
      Notice({
        state: "error",
        message: "로그인이 필요합니다.",
      })
      reissue().catch(() => {
        cookie.remove("accessToken");
        cookie.remove("refreshToken");
        window.location.href = "/auth/login";
      });
    }
    return Promise.reject(error);
  }
);
export default request;
