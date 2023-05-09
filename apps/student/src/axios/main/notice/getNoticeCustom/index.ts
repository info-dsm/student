import { getWaitingNoticeListProps } from "@/../../packages/api/dist";
import request from "../..";

export const getNoticeCustom = async () => {
  const data: getWaitingNoticeListProps = await request({
    method: "get",
    url: "/notice/custom",
    params: {
      idx: 0,
      size: 6,
    },
  });
  return data;
};
