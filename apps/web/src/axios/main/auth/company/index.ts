import request from "../..";
type contactProps =
  | "contactorName"
  | "contactorRank"
  | "contactorPhone"
  | "email"
  | "password"
  | "passwordHint";
export interface companySignUpProps {}
export const companySignUp = async (
  emailCheckCode: string,
  companyInformation: {
    homeAddress: {
      fullAddress: string;
      addressNumber: string;
    };
    agentAddress: {
      fullAddress: string;
      addressNumber: string;
    };
    representativeName: string;
    establishedAt: string;
    workerCount: string;
    annualSales: string;
    companyPhone: string;
  },
  companyContact: {
    [key in contactProps]: string;
  },
  others: {
    companyNumber: string;
    companyNameRequest: {
      companyName: string;
    };
    businessAreaList: string[];
    introduction: string;
  },
  photos: {
    businessRegisteredCertificate:
      | {
          fileName: string;
          contentType: string;
        }
      | undefined;
    companyIntroductionFile:
      | (
          | {
              fileName: string;
              contentType: string;
            }
          | undefined
        )[];
    companyLogo:
      | {
          fileName: string;
          contentType: string;
        }
      | undefined;
    companyPhotoList:
      | (
          | {
              fileName: string;
              contentType: string;
            }
          | undefined
        )[];
  }
) => {
  const data = await request({
    url: "company/signup",
    params: {
      emailCheckCode,
    },
    data: {
      companyInformation,
      companyContact,
      ...others,
      ...photos,
    },
  });
  console.log(data);
  return data;
};
