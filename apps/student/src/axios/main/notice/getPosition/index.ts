import request from "../..";

export const getPosition = async () => {
  const data: string = await request.get(`/notice/custom/preference`);
  return data;
};
