import { NextPage } from "next";
import Link from "next/link";

const LoginPage: NextPage = () => {
  return (
    <>
      <Link href={`/teacher/company`}>선생님 메인페이지로</Link>
    </>
  );
};
export default LoginPage;
