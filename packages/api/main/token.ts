import { getCookie } from "./cookie/getCookie";
// axios instance 를 생성해주었습니다.
import axios from "axios";
const requestApi = axios.create({
  baseURL: "http://43.200.191.39/",
  headers: {
    Authorization: `Bearer ${getCookie("accessToken")}`,
  },
});
requestApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
requestApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
export default requestApi;
