import request from "../..";

export interface AnnouncementListProps {
  content: {
    id: string;
    title: string;
    createdAt: string;
    type: "DEVELOPER" | "TEACHER";
  }[];
  totalElements: number;
}

export const AnnouncementList = async (props: {
  idx: number;
  size: number;
  type: "전체" | "DEVELOPER" | "TEACHER";
}) => {
  const data: AnnouncementListProps = await request.get(
    `/statistics/announcement${
      props.type !== "전체" ? "?type=" + props.type : ""
    }`,
    {
      params: {
        idx: props.idx,
        size: props.size,
      },
    }
  );
  return data;
};
