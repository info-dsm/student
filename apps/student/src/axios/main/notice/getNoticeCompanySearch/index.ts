import request from "../..";
import { getWaitingNoticeListProps } from "../getNoticeList";

export const getNoticeCompanySearch = async ({
  name,
  cnt,
  size,
}: {
  name: string;
  cnt: number;
  size: number;
}) => {
  const data: getWaitingNoticeListProps = await request.get(
    `/notice/company?query=${name}&idx=${cnt}&size=${size}`
  );
  return data;
};
