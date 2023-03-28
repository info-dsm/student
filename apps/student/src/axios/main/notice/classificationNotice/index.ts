import request from "../..";
import { getWaitingNoticeListProps } from "../getNoticeList";

export const getClassificationNotice = async ({
  classification,
  cnt,
}: {
  classification: string;
  cnt: number;
}) => {
  const data: getWaitingNoticeListProps = await request.get(
    `/notice/classification/small?idx=${cnt}&size=12&smallClassification=${classification}`
  );
  return data;
};
