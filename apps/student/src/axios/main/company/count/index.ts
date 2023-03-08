import request from "../..";

export const CompanyCount = async () => {
  const res: number = await request({
    method: "GET",
    url: "/company/count",
  });

  return res;
};
