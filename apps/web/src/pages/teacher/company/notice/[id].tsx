import { useRouter } from "next/router";
import { Footer } from "ui";
import { getBaseList, getBaseListProps } from "../../../../axios/dist";
import WriteNotice from "../../../../lib/components/company/WriteNotice";

const WriteNoticeCompany = () => {
  const router = useRouter();
  return (
    <>
      <WriteNotice
        {...{
          menu: [
            {
              onClick: () => router.push("/teacher/notice"),
              key: "모집공고",
              selected: false,
            },
            {
              onClick: () => router.push("/teacher/company"),
              key: "회사",
              selected: false,
            },
          ],
          companyNumber: router.query.id as string,
          path: "/teacher/company",
        }}
      />
    </>
  );
};
export default WriteNoticeCompany;
