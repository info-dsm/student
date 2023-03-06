// import { getWaitingNoticeListContentProps } from "apis";
import request from "../..";

export const getCompanyNotice = async ({ id }: { id: string }) => {
  const data = await request({
    method: "GET",
    url: `/notice/list/${id}`,
  });

  return data;
};
