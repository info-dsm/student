import { getCompanyList1Props } from "@/src/axios/dist";
import request from "../..";

export const getCompanyCustom = async () => {
  const data: getCompanyList1Props = await request({
    method: "get",
    url: "/company/custom",
    params: {
      idx: 0,
      size: 6,
    },
  });
  return data;
};
