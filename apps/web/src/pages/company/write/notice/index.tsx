import { useRouter } from "next/router";
import WriteNotice from "../../../../lib/components/company/WriteNotice";

const WriteNoticeCompany = () => {
  const router = useRouter();
  return (
    <>
      <WriteNotice
        {...{
          menu: [
            {
              onClick: () => {
                router.push("/");
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
        }}
      />
    </>
  );
};
export default WriteNoticeCompany;
