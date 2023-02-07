import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import TeacherCompany from "../../../../lib/components/teacher/Company";
import { useRouter } from "next/router";
import { getSearchCompany } from "../../../../axios/dist";
const CompanySearchResult = () => {
  const id = useRouter().query.id as string;
  console.log(id);
  const [getIndex, setIndex] = useState<number>(0);
  const { status, data } = useQuery(
    ["list", getIndex],
    async () => getSearchCompany(id, getIndex),
    { keepPreviousData: true }
  );
  const ChangeIndex = useCallback(
    (num: number) => {
      setIndex(num - 1);
    },
    [setIndex]
  );
  return (
    <>
      <TeacherCompany
        {...{ status, data, getIndex, ChangeIndex, result: id }}
      />
    </>
  );
};
export default CompanySearchResult;
