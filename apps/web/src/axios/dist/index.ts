export {
  getCompanyList,
  type getCompanyListProps,
} from "../main/company/getCompanyList";
export { login, type loginProps } from "../main/auth/login/index";
export { sendNumber, confirmCode } from "../main/auth/email/index";
export { getEmployList, type getEmployProps } from "../main/employment/index";
export { companyAssosiate } from "../main/company/grant";
export { getSearchCompany } from "../main/company/search";
export { getYearCompany } from "../main/company/year";
export { type NoticeProps } from "../main/notice"
export { postAcceptNotice } from '../main/notice/accept';
export { deleteNotice } from "../main/notice/delete";
export { deleteNoRemainNotice } from "../main/notice/remove";
export { getOnList } from '../main/notice/on';
export { getWaitList } from '../main/notice/wait';
export { getGoneList } from "../main/notice/gone";
export { getCompanyNoticeEvery } from "../main/notice/search";
export { getBusiness, type TagProps } from '../main/company/businessTag';
export {companySignUp,type companySignUpProps}from '../main/auth/company';