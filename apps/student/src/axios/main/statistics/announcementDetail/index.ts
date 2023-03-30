import request from "../..";

export interface AnnouncementDetailProps {
  id: string;
  title: string;
  content: string;
  fileList: [
    {
      fileId: string;
      fileUrl: string;
      fileType: any;
      extension: string;
      fileName: string;
      announcementId: string;
    }
  ];
  createdAt: string;
  type: "DEVELOPER" | "TEACHER";
}

export const AnnouncementDetail = async ({
  announcementId,
}: {
  announcementId: string;
}) => {
  const data: AnnouncementDetailProps = await request.get(
    `/statistics/announcement/${announcementId}`
  );
  return data;
};
