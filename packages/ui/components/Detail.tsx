import styled from "styled-components";
import Checked2 from "../images/Checked2";
interface getCompanyDetailProps {
  companyNumber: string;
  companyName: string;
  contactor: {
    name: string;
    email: string;
    rank: string;
    phoneNumber?: string;
    passwordHint?: string;
    companyNumber: string;
  };
  companyInformation: {
    homeAddress?: {
      fullAddress: string;
      addressNumber: string;
    };
    agentAddress?: {
      fullAddress: string;
      addressNumber: string;
    };
    representativeName: string;
    establishedAt: number;
    workerCount: number;
    annualSales: number;
    companyPhone: string;
  };
  businessTagged: {
    id: string;
  }[];
  isLeading: true;
  isAssociated: true;
  latestNoticeYear?: number;
  totalEmployedCount: number;
  companyIntroductionResponse: {
    introduction: string;
    businessCertificate: {
      fileId: string;
      fileUrl: string;
      fileType: "IMAGE" | "DOCS" | "UNKNOWN";
      extension: string;
      fileName: string;
      companyNumber: string;
      companyFileClassificationType:
        | "BUSINESS_CERTIFICATE"
        | "COMPANY_INTRODUCTION"
        | "COMPANY_LOGO"
        | "COMPANY_PHOTO";
    };
    companyIntroductionFile: {
      fileId: string;
      fileUrl: string;
      fileType: "IMAGE" | "DOCS" | "UNKNOWN";
      extension: string;
      fileName: string;
      companyNumber: string;
      companyFileClassificationType:
        | "BUSINESS_CERTIFICATE"
        | "COMPANY_INTRODUCTION"
        | "COMPANY_LOGO"
        | "COMPANY_PHOTO";
    }[];
    companyLogo: {
      fileId: string;
      fileUrl: string;
      fileType: "IMAGE" | "DOCS" | "UNKNOWN";
      extension: string;
      fileName: string;
      companyNumber: string;
      companyFileClassificationType:
        | "BUSINESS_CERTIFICATE"
        | "COMPANY_INTRODUCTION"
        | "COMPANY_LOGO"
        | "COMPANY_PHOTO";
    };
    companyPhotoList: {
      fileId: string;
      fileUrl: string;
      fileType: "IMAGE" | "DOCS" | "UNKNOWN";
      extension: string;
      fileName: string;
      companyNumber: string;
      companyFileClassificationType:
        | "BUSINESS_CERTIFICATE"
        | "COMPANY_INTRODUCTION"
        | "COMPANY_LOGO"
        | "COMPANY_PHOTO";
    }[];
  };
}
export const DetailInfo = ({
  companyInfo,
  subData,
}: {
  companyInfo: getCompanyDetailProps;
  subData: string;
}) => {
  return (
    <NoticeInfo>
      <span>
        <span>
          {companyInfo.isLeading ? (
            <span>
              <Checked2 />
              선도기업
            </span>
          ) : (
            <></>
          )}
          {companyInfo.isAssociated ? (
            <span>
              <Checked2 />
              협력기업
            </span>
          ) : (
            <></>
          )}
        </span>
        <span>
          <span>{subData}</span>
        </span>
      </span>
      <div>
        <div>
          <div>근로자 수</div>
          <span>{companyInfo.companyInformation.workerCount}명</span>
        </div>
        <div>
          <div>사업분야</div>
          <span>
            {companyInfo.businessTagged.map((t) => (
              <>{t.id} </>
            ))}
          </span>
        </div>
        <div>
          <div>사업자 번호</div>
          <span>{companyInfo.companyNumber}</span>
        </div>
        <div>
          <div>설립연도</div>
          <span>{companyInfo.companyInformation.establishedAt}년</span>
        </div>
        {companyInfo.companyInformation.homeAddress ? (
          <div>
            <div>본사</div>
            <span>
              {companyInfo.companyInformation.homeAddress.fullAddress}
            </span>
          </div>
        ) : (
          ""
        )}
        {companyInfo.companyInformation.agentAddress ? (
          <div>
            <div>지점</div>
            <span>
              {companyInfo.companyInformation.agentAddress.fullAddress}
            </span>
          </div>
        ) : (
          ""
        )}
        <div>
          <div>이메일</div>
          <span>{companyInfo.contactor.email}</span>
        </div>
      </div>
    </NoticeInfo>
  );
};

const NoticeInfo = styled.div`
  margin-top: 40px;
  > span {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 17px;
    > span {
      display: flex;
      gap: 24px;
      > span {
        display: flex;
        align-items: center;
        gap: 7px;
      }
    }
  }

  > div {
    margin-top: 40px;
    font-size: 17px;
    display: block;
    > div {
      margin-bottom: 16px;
      display: flex;
      font-weight: 500;
      align-items: center;
      div {
        font-weight: 700;
        width: 114px;
      }
    }
  }
`;
