import request from "../..";

export interface getEmploymentClassProps {
  classNum: number;
  totalClassStudent: number;
  information: {
    classNum: number;
    totalClassStudent: number;
    major: string;
    description: string;
    homeroomTeacherName: string;
  };
  totalEmployedClassStudent: number;
  totalGradeStudent: number;
  totalEmployedGradeStudent: number;
  employmentList: {
    comapny: {
      companyNumber: string;
      companyName: string;
      companyLogo: string;
    };
    classNum: number;
  }[];
}

export const getEmploymentClass = async ({
  classroom,
}: {
  classroom: number;
}) => {
  const data: getEmploymentClassProps = await request({
    method: "get",
    url: `/employment/2023/class/${classroom + 1}`,
  });
  return data;
};
