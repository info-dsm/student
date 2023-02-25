import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  getBaseList,
  getBaseListProps,
  getCompanyNumber,
} from "../../../../../axios/dist";
import EditNotice from "../../../../../lib/components/company/EditNotice";

const EditNoticeCompany = ({ post }: { post: getBaseListProps }) => {
  const router = useRouter();
  return (
    <>
      <EditNotice
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
          noticeId: router.query.id as string,
          companyNumber: getCompanyNumber() as string,
        }}
      />
    </>
  );
};
export default EditNoticeCompany;
export const getServerSideProps: GetStaticProps = async () => {
  const posts = await getBaseList();
  return { props: { posts } };
};
