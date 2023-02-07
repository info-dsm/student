import TeacherNotice from "../../../lib/components/teacher/Notice";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { getOnList } from "../../../axios/main/notice/on";
const TeacherNoticePage = () => {
  const [getIndex, setIndex] = useState<number>(0);
  const { status, data } = useQuery(
    ["notice", getIndex],
    async () => getOnList(getIndex),
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
      <TeacherNotice {...{ status, data, getIndex, ChangeIndex }} />
    </>
  );
};
export default TeacherNoticePage;
