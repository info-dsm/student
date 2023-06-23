import request from "../..";

export interface PostInterviewApiResType {
  appliedJobPart: string;
  interviewDate: string;
  directorCount: number;
  interviewPlace: string;
  interviewType: "OFFLINE" | "ONLINE";
  questionContent: string;
  interviewImpression: string;
  interviewCaution: string;
}
export const PostInterviewApi = async ({
  companyNumber,
  data,
}: {
  companyNumber: string;
  data: PostInterviewApiResType;
}) => {
  await request({
    method: "POST",
    url: `/company/${companyNumber}/interview`,
    data: data,
  });
};
