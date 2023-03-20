import request from "../..";
import { getWaitingNoticeListProps } from "../getNoticeList";

export const getClassificationNotice = async ({
  classification,
}: {
  classification: string;
}) => {
  const data: getWaitingNoticeListProps = await request.get(
    `/notice/classification/${classification}?idx=0&size=10`
  );
  return data;
};
