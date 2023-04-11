import request from "../..";
import { getWaitingNoticeListProps } from "../getNoticeList";

export const getNoticeSearch = async ({
  params,
}: {
  params: {
    idx: number;
    size: number;
    companyName?: string;
    smallClassification?: string;
  };
}) => {
  const data: getWaitingNoticeListProps = await request.get(`/notice/search`, {
    params,
  });
  return data;
};
