import request from "../..";
import { getWaitingNoticeListProps } from "../getNoticeList";

export const getClassificationNotice = async ({
  classification,
  cnt,
  size
}: {
  classification: string;
  cnt: number;
  size: number
}) => {
  const data: getWaitingNoticeListProps = await request.get(
    `/notice/classification/small?idx=${cnt}&size=${size}&smallClassification=${classification}`
  );
  return data;
};
