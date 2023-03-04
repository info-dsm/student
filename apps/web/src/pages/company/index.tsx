import ShowCompanyNotice from "../../lib/components/company/ShowNotice";
import { getCompanyNoticeEvery, getCompanyNumber } from "../../axios/dist";
import { useQuery } from "@tanstack/react-query";
import { Footer } from "ui";
const Main = () => {
  const { status, data } = useQuery(
    ["companyNoticeEvery", getCompanyNumber()],
    () => getCompanyNoticeEvery(getCompanyNumber() as string),
    {
      keepPreviousData: true,
    }
  );
  return (
    <>
      <ShowCompanyNotice {...{ data, status }} />
      <Footer />
    </>
  );
};
export default Main;
