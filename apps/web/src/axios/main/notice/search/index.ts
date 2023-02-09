import { NoticeProps } from "./../index";
import request from "../..";

export const getCompanyNoticeEvery = async (
  idx: number,
  companyNumber: string
) => {
  const data: NoticeProps = await request.get(
    `/notice/list/every/${companyNumber}`,
    {
      params: { idx, size: 11 },
    }
  );
  console.log(data);
  return data;
};
