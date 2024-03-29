import { NoticeProps } from "./../index";
import request from "../..";

export const getGoneList = async (
  idx: number,
  status: "APPROVE" | "WAITING"
) => {
  const data: NoticeProps = await request.get("/notice/list/end", {
    params: { idx, size: 11, status },
  });
  return data;
};
