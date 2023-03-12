import request from "../..";

export interface getApplyCountProps {
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

export const getApplyCount = async ({
  companyID,
  noticeID,
  status,
}: {
  companyID: string;
  noticeID: string;
  status: "WAITING" | "APPROVE" | "REJECT";
}) => {
  const data: getApplyCountProps[] = await request({
    method: "get",
    url: `/applies/${companyID}/${noticeID}`,
    params: {
      status: status,
    },
  });

  return data;
};
