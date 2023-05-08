import request from "../..";

export const getCompanyPreference = async () => {
  const data: string = await request({
    method: "get",
    url: "/company/custom/preference",
  });
  return data;
};
