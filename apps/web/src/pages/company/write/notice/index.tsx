import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  getBaseList,
  getBaseListProps,
  getCompanyNumber,
} from "../../../../axios/dist";
import WriteNotice from "../../../../lib/components/company/WriteNotice";

const WriteNoticeCompany = ({ post }: { post: getBaseListProps }) => {
  const router = useRouter();
  return (
    <>
      <WriteNotice
        {...{ post }}
        {...{
          menu: [
            {
              onClick: () => {
                router.push("/company");
              },
              key: "내가 등록한 모집공고",
              selected: false,
            },
            {
              onClick: () => {
                router.push("/company/write/notice");
              },
              key: "모집공고 작성",
              selected:
                router.asPath ===
                ("/company/write/notice/" || "/company/write/notice"),
            },
          ],
          path: "/company",
          companyNumber: getCompanyNumber() as string,
        }}
      />
    </>
  );
};
export default WriteNoticeCompany;
export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getBaseList();
  return { props: { posts } };
};
