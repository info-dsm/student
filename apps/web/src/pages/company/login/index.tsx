import Background from "../../../lib/components/Background";
import LoginPage from "../../../lib/components/LoginPage";
import { NextPage } from "next";
const props = {
  member: false,
  comment: "회사 로그인",
  path: {
    signUp: "/company/signup/1",
    direct: "/company",
  },
};
const menu = [
  {
    onClick: () => {},
    key: "내가 등록한 모집공고",
    selected: false,
  },
  {
    onClick: () => {},
    key: "모집공고 작성",
    selected: false,
  },
];
const CompanyLogin: NextPage = () => {
  return (
    <>
      <Background {...{ menu }} />
      <LoginPage {...props} />
    </>
  );
};
export default CompanyLogin;
