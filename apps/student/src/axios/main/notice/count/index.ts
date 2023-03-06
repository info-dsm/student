import request from "../..";

export const NoticeCount = async () => {
  const res: number = await request({
    method: "GET",
    url: "/notice/count",
  });
  return res;
};
