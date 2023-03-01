import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { getBaseList, getBaseListProps } from "../../../../axios/dist";
import EditNotice from "../../../../lib/components/company/EditNotice";

const EditNoticeCompany = ({ post }: { post: getBaseListProps }) => {
  const router = useRouter();
  return (
    <>
      <EditNotice
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
          post,
          path: "/teacher/company",
        }}
        {...(router.query as { companyNumber: string; noticeId: string })}
      />
    </>
  );
};
export default EditNoticeCompany;
export const getServerSideProps: GetStaticProps = async () => {
  const posts = await getBaseList();
  return { props: { posts } };
};
