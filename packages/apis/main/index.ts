// axios instance 를 생성해주었습니다.
import axios from "axios";
const request = axios.create({
  baseURL: "http://3.35.4.207:8000",
});
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
export default request;
