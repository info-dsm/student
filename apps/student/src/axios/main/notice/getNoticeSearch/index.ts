import request from "../..";
import { getWaitingNoticeListProps } from "../getNoticeList";

export const getNoticeSearch = async ({
  companyName,
  smallClassification,
  cnt,
  size,
}: {
  companyName: string;
  smallClassification: string;
  cnt: number;
  size: number;
}) => {
  let params: {
    idx: number;
    size: number;
    companyName?: string;
    smallClassification?: string;
  } = {
    idx: cnt,
    size: size,
  };
  params =
    companyName !== ""
      ? { ...params, ["companyName"]: companyName }
      : { ...params };
  params =
    smallClassification !== "전체"
      ? { ...params, ["smallClassification"]: smallClassification }
      : { ...params };

  console.log(params);

  const data: getWaitingNoticeListProps = await request.get(`/notice/search`, {
    params,
  });
  return data;
};
