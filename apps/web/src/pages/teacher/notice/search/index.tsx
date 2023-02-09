import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import {
  deleteNoRemainNotice,
  deleteNotice,
  getCompanyNoticeEvery,
  postAcceptNotice,
} from "../../../../axios/dist";
import TeacherNotice from "../../../../lib/components/teacher/Notice";

const SearchCompanyNotice = () => {
  const companyNumber = useRouter().query.companyNumber as string;
  const [getIndex, setIndex] = useState<number>(0);
  const { status, data } = useQuery(
    ["notice", getIndex],
    async () => getCompanyNoticeEvery(getIndex, companyNumber),
    { keepPreviousData: true }
  );
  const ChangeIndex = useCallback(
    (num: number) => {
      setIndex(num - 1);
    },
    [setIndex]
  );
  const GetElementList = (check: boolean[]) => {
    const companyNumberArr: {
      noticeId: string;
      companyNumber: string;
    }[] = [];
    check.map((v: boolean, i: number) => {
      if (v && data) {
        companyNumberArr.push({
          noticeId: data.content[i].noticeId,
          companyNumber: data.content[i].company.companyNumber,
        });
      }
    });
    return companyNumberArr;
  };
  const GetApproveList = (check: boolean[]) => {
    const companyNumberArr: {
      noticeId: string;
      companyNumber: string;
    }[] = [];
    check.map((v: boolean, i: number) => {
      if (
        v &&
        data &&
        new Date() > new Date(data.content[i].noticeOpenPeriod.endDate)
      ) {
        companyNumberArr.push({
          noticeId: data.content[i].noticeId,
          companyNumber: data.content[i].company.companyNumber,
        });
      }
    });
    return companyNumberArr;
  };
  const GetWaitingList = (check: boolean[]) => {
    const companyNumberArr: {
      noticeId: string;
      companyNumber: string;
    }[] = [];
    check.map((v: boolean, i: number) => {
      if (
        v &&
        data &&
        new Date() > new Date(data.content[i].noticeOpenPeriod.endDate) &&
        data.content[i].approveStatus === "WAITING"
      ) {
        companyNumberArr.push({
          noticeId: data.content[i].noticeId,
          companyNumber: data.content[i].company.companyNumber,
        });
      }
    });
    return companyNumberArr;
  };
  const grantList = [
    {
      text: "접수",
      onClick: (check: boolean[]) => {
        postAcceptNotice(GetWaitingList(check)).then(() => location.reload());
      },
    },
    {
      text: "모집 종료",
      onClick: (check: boolean[]) => {
        deleteNotice(GetApproveList(check)).then(() => location.reload());
      },
    },
    {
      text: "삭제",
      onClick: (check: boolean[]) => {
        deleteNoRemainNotice(GetElementList(check)).then(() =>
          location.reload()
        );
      },
    },
  ];
  return (
    <>
      <TeacherNotice
        {...{
          status,
          data,
          getIndex,
          ChangeIndex,
          grantList,
          listStatus: "WAITING",
        }}
      />
    </>
  );
};
export default SearchCompanyNotice;
