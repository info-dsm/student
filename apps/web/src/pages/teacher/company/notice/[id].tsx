import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getBaseList, getBaseListProps } from "../../../../axios/dist";
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
export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getBaseList();
  return { props: { posts } };
};
