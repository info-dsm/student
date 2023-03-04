import request from "../..";

export interface getNoticeDetailProps {
  noticeId: string;
  company: {
    companyNumber: string;
    companyName: string;
  };
  classificationResponse: {
    bigClassification: {
      bigClassification: string;
    };
    name: string;
  }[];
  detailBusinessDescription?: string;
  numberOfEmployee: number;
  gradeCutLine?: number;
  interviewProcessList: { [key: number]: string };
  languageList: { languageName: string }[];
  technologyList: { technologyName: string }[];
  certificateList: { certificateName: string }[];
  workTime: {
    commuteStartTime?: number;
    commuteEndTime?: number;
    workTimePerDay: number;
    workTimePerWeek: number;
    isFlexible: boolean;
  };
  mealSupport: {
    mealSupportPay: number;
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
  };
  welfare: {
    dormitorySupport: boolean;
    selfDevelopmentPay: boolean;
    equipmentSupport: boolean;
    youthTomorrowChaeumDeduction: boolean;
    alternativeMilitaryPlan: boolean;
    elseSupport?: string;
  };
  noticeOpenPeriod: {
    startDate: string;
    endDate: string;
  };
  needDocuments?: string;
  otherFeatures?: string;
  workPlace: {
    isSameWithCompanyAddress: boolean;
    otherPlace?: string;
  };
  applicantCount: number;
  attachmentFileList: [
    {
      fileId: string;
      fileUrl: string;
      fileType: "IMAGE" | "DOCS" | "UNKNOWN";
      extension: string;
      fileName: string;
      noticeId: string;
    }
  ];
  isPersonalContact: boolean;
}

export const getNoticeDetail = async ({ id }: { id: string }) => {
  const data: getNoticeDetailProps = await request({
    method: "GET",
    url: `notice/${id}`,
  });
  console.log(data);

  return data;
};
