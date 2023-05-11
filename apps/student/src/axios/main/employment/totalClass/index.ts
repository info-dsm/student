import request from "../..";

export interface getEmploymentTotalClassProps {
  totalGradeStudent: number;
  totalEmployedGradeStudent: number;
  classList: {
    classNum: number;
    information: {
      classNum: number;
      totalClassStudent: number;
      major: string;
      description: string;
      homeroomTeacherName: string;
    };
    totalClassStudent: number;
    totalEmployedClassStudent: number;
  }[];
}

export const getEmploymentTotalClass = async ({ year }: { year: number }) => {
  const data: getEmploymentTotalClassProps = await request({
    method: "get",
    url: `/employment/${year}/class/`,
  });
  return data;
};
