import Background from "../../../lib/components/Background";
import LoginPage from "../../../lib/components/LoginPage";
import { NextPage } from "next";
import menu from "../../../data/logindata/company";
const props = {
  member: false,
  comment: "회사 로그인",
  path: {
    signUp: "/company/signup/1",
    direct: "/company",
  },
};

const CompanyLogin: NextPage = () => {
  return (
    <>
      <Background {...menu} />
      <LoginPage {...props} />
    </>
  );
};
export default CompanyLogin;
