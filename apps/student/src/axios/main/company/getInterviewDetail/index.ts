import request from "../..";

export interface GetInterviewDetailApiResType {
  id: number;
  student: {
    studentEmail: string;
    studentKey: string;
    studentName: string;
  };
  companyNumber: string;
  appliedJobPart: string;
  interviewDate?: string;
  directorCount: number;
  interviewPlace?: string;
  questionContent: string;
  interviewImpression: string;
  interviewCaution?: string;
  writtenDate: string;
}

export const GetInterviewDetailApi = async ({
  interviewId,
}: {
  interviewId: number;
}) => {
  const res: GetInterviewDetailApiResType = await request({
    method: "GET",
    url: `/company/interview?id=${interviewId}`,
  });
  return res;
};
