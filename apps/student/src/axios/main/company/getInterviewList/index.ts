import request from "../..";

export interface getInterviewListApiResType {
  id: number;
  companyNumber: string;
  appliedJobPart: string;
  student: {
    studentEmail: string;
    studentKey: string;
    studentName: string;
  };
  interviewDate: string;
  writtenDate: string;
}
[];

export const getInterviewListApi = async ({
  companyNumber,
}: {
  companyNumber: string;
}) => {
  const response: getInterviewListApiResType[] = await request({
    method: "get",
    url: `/company/${companyNumber}/interview`,
  });
  return response;
};
