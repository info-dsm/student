import {
  getNoticeDetailProps2,
  getNoticeDetail2,
} from "./../main/notice/getNotice/index";
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
export { type NoticeProps } from "../main/notice";
export { postAcceptNotice } from "../main/notice/accept";
export { deleteNotice } from "../main/notice/delete";
export { deleteNoRemainNotice } from "../main/notice/remove";
export { getOnList } from "../main/notice/on";
export { getWaitList } from "../main/notice/wait";
export { getGoneList } from "../main/notice/gone";
export { getCompanyNoticeEvery } from "../main/notice/company";
export { getBusiness, type TagProps } from "../main/company/businessTag";
export { companySignUp, type companySignUpProps } from "../main/auth/company";
export { getBaseList, type getBaseListProps } from "../main/notice/baseList";
export { getCompanyNumber } from "../main/storage";
export { type NoticeCompanyDtoType } from "../main/notice/company/data";
export { createNotice, type createNoticeProps } from "../main/notice/create";
export { reissue } from "../main/auth/reissue";
export { teacherSignUp } from "../main/auth/teacher";
export { presigned } from "../main/presigned";
export { createNoticeFile } from "../main/presigned/createNotice";
export { editNotice } from "../main/notice/edit";
export {
  getCompanyList1,
  type getCompanyList1Props,
  type getCompanyList1ContentProps,
} from "../main/company/getCompanyList copy";
export {
  getWaitingNoticeList,
  type getWaitingNoticeListProps,
  type getWaitingNoticeListContentProps,
} from "../main/notice/getNoticeList";

export { codeCheck } from "../main/auth/codeCheck";

export { codeSend } from "../main/auth/codeSend";

export { studentKeyCheck } from "../main/auth/studentKeyCheck";

export { studentSignUp } from "../main/auth/studentSignUp";

export {
  getClosedNoticeList,
  type getClosedNoticeListProps,
  type getClosedNoticeListContentProps,
} from "../main/notice/getClosedNoticeList";

export {
  getNoticeDetail,
  type getNoticeDetailProps,
} from "../main/notice/getNoticeDetail";

export {
  getCompanyDetail,
  type getCompanyDetailProps,
} from "../main/company/getCompanyDetail";

export { getCompanyNotice } from "../main/company/getCompanyNotice";

export { getCompanySearch } from "../main/company/getCompanySearch";

export { getUserInfo, type getUserInfoProps } from "../main/user/getUserInfo";

export {
  getSupportStatus,
  type getSupportStatusProps,
} from "../main/applies/applyStatus";

export { applyNotice } from "../main/applies/applyNotice";

export {
  getApplyList,
  type getApplyListProps,
} from "../main/applies/applyList";
export { login1, type login1Props } from "../main/auth/login copy/index";

export {
  getNoticeDetail2,
  type getNoticeDetailProps2,
} from "../main/notice/getNotice";

export { NoticeCount } from "../main/notice/count";

export { CompanyCount } from "../main/company/count";

export {
  getApplyCount,
  type getApplyCountProps,
} from "../main/applies/applyCount";

export {
  getClassification,
  type getClassificationProps,
} from "../main/notice/classification";

export { getClassificationNotice } from "../main/notice/classificationNotice";

export {
  AnnouncementList,
  type AnnouncementListProps,
} from "../main/announcement/announcementList";

export {
  AnnouncementDetail,
  type AnnouncementDetailProps,
} from "../main/announcement/announcementDetail";

export {
  AnnouncementLatest,
  type AnnouncementLatestProps,
} from "../main/announcement/latestAnnouncement";

export { getNoticeCompanySearch } from "../main/notice/getNoticeCompanySearch";

export { getNoticeSearch } from "../main/notice/getNoticeSearch";
export { getPosition } from "../main/notice/getPosition";
export { getCompanyPreference } from "../main/company/getCompanyPreference";
export { postCompanyCustom } from "../main/company/postCustom";
export { PostNoticeCustom } from "../main/notice/postCustom";
export { getCompanyCustom } from "../main/company/getCompanyCustom";
export { getNoticeCustom } from "../main/notice/getNoticeCustom";
export {
  getEmploymentClass,
  type getEmploymentClassProps,
} from "../main/employment/class";
export {
  getEmploymentTotalClass,
  type getEmploymentTotalClassProps,
} from "../main/employment/totalClass";
export {
  getInterviewListApi,
  type getInterviewListApiResType,
} from "../main/company/getInterviewList";
export {
  PostInterviewApi,
  type PostInterviewApiResType,
} from "../main/company/postInterview";
export {
  GetInterviewDetailApi,
  type GetInterviewDetailApiResType,
} from "../main/company/getInterviewDetail";
