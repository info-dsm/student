import fetch from "axios";
import { getCookie } from "./cookies";

const authFetcher = async (path: string, options: any) => {
  const response = await fetch(path, {
    method: "GET", 
    headers: {
      "Authorization": `Bearer ${getCookie("info-token")}`
    }
  });
  return {
    status: response.status,
    statusText: response.statusText,
    data: response.data()
  };
};

export default authFetcher;
