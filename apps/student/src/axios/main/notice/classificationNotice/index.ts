import request from "../..";
import { getWaitingNoticeListProps } from "../getNoticeList";

export const getClassificationNotice = async ({
  classification,
}: {
  classification: string;
}) => {
  const data: getWaitingNoticeListProps = await request.get(
    `/notice/classification/small?idx=0&size=10&smallClassification=${classification}`
  );
  return data;
};
