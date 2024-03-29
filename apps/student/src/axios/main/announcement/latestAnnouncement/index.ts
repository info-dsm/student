import request from "../..";

export interface AnnouncementLatestProps {
  id: string;
  title: "string";
  createdAt: string;
  type: "DEVELOPER" | "TEACHER";
}

export const AnnouncementLatest = async () => {
  const data: AnnouncementLatestProps = await request.get(
    "/announcement/latest"
  );
  return data;
};
