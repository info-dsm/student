// axios instance 를 생성해주었습니다.
import axios from "axios";
const requestApi = axios.create({
  baseURL: "http://43.200.191.39/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaW5nZW9uMjdAZHNtLmhzLmtyIiwiYXV0aC1sZXZlbCI6IlNUVURFTlQiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjczMzE0ODAyLCJleHAiOjE2NzM0MDEyMDJ9.cbpClr8ATsqIgn1hL0qMCCVcR6qEL2ppx-jWs6o5ED8`,
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
