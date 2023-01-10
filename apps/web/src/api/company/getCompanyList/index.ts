import requestApi from "../../token";
export interface getCompanyListProps {
  totalPages: number;
  totalElements: number;
  size: number;
  content: {
    companyNumber: string;
    contactorEmail: string;
    companyName: string;
    homeAddressInfo: {
      fullAddress: string;
      addressNumber: string;
    };
    businessTagged: {
      name: string;
    }[];
    workerCount: number;
    annualSales: bigint;
    isLeading: boolean;
    isAssociated: boolean;
    latestNoticeYear?: number;
    totalEmployedCount: number;
    companyIntroductionResponse: {
      introduction: string;
      businessCertificate: {
        fileId: string;
        fileUrl: string;
        fileType: "FileType";
        extension: string;
        fileName: string;
        companyNumber: string;
        companyFileClassificationType: "CompanyFileClassificationType";
      };
      companyIntroductionFile: {
        fileId: string;
        fileUrl: string;
        fileType: "FileType";
        extension: string;
        fileName: string;
        companyNumber: string;
        companyFileClassificationType: "CompanyFileClassificationType";
      }[];
      companyLogo: {
        fileId: string;
        fileUrl: string;
        fileType: "FileType";
        extension: string;
        fileName: string;
        companyNumber: string;
        companyFileClassificationType: "CompanyFileClassificationType";
      };
      companyPhotoList: {
        fileId: string;
        fileUrl: string;
        fileType: "FileType";
        extension: string;
        fileName: string;
        companyNumber: string;
        companyFileClassificationType: "CompanyFileClassificationType";
      }[];
    };
  }[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
}
export const getCompanyList = async (idx: number) => {
  try {
    const { data } = await requestApi({
      method: "get",
      url: "/company/list",
      params: {
        idx: idx,
        size: 8,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
