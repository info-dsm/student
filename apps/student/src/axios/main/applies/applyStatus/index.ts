import request from "../..";
import cookie from "js-cookie";

export interface getSupportStatusProps {
  appliesId: string;
  applier: {
    email: string;
    name: string;
  };
  noticeId: string;
  status: "WAITING" | "APPROVE" | "REJECT";
  resumeList: {
    fileId: string;
    fileUrl: string;
    fileType: "IMAGE" | "DOCS" | "UNKNOWN";
    extension: string;
    fileName: string;
  }[];
}

export const getSupportStatus = async () => {
  if (typeof window !== "undefined") {
    if (cookie.get("accessToken")) {
      const data: getSupportStatusProps[] = await request({
        method: "get",
        url: "/applies/student",
        headers: {
          Authorization: `Bearer ${cookie.get("accessToken")}`,
        },
      });
      return data;
    }
  }
  return [];
};
