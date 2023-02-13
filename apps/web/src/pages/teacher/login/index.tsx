import menu from "../../../data/logindata";
import Background from "../../../lib/components/Background";
import LoginPage from "../../../lib/components/LoginPage";
const props = {
  member: true,
  comment: "교사 로그인",
  path: {
    signUp: "/teacher/signup",
    direct: "/teacher/notice",
  },
};

const TeacherLogin = () => {
  return (
    <>
      <Background {...menu} />
      <LoginPage {...props} />
    </>
  );
};
export default TeacherLogin;
