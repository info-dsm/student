import request from "../..";

export interface AnnouncementListProps {
  content: {
    title: string;
    createdAt: string;
    type: "DEVELOPER" | "TEACHER";
  }[];
  totalElements: number;
}

export const AnnouncementList = async (props: {
  idx: number;
  size: number;
}) => {
  const data: AnnouncementListProps = await request.get(
    `/statistics/announcement`,
    {
      params: props,
    }
  );
  return data;
};
