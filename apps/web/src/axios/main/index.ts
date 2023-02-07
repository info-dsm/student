// axios instance 를 생성해주었습니다.
import axios from "axios";
const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
});
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
    return Promise.reject(error);
  }
);
export default request;
