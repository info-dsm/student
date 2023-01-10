import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Pagination, Toast } from "ui";
import React, { useState } from "react";
import { getCompanyList } from "apis";
const TeacherMain: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  const [getIndex, setIndex] = useState<number>(1);
  const { status, data } = useQuery(["companyList", getIndex], async () =>
    getCompanyList(getIndex)
  );
  const Adfg = (num: number) => {
    setIndex(num);
  };
  if (data) {
    console.log(data);
  }
  return (
    <>
      <Toast label={"company"}>
        <Pagination nowIndex={1} lastIndex={3} changeIndex={Adfg}></Pagination>
      </Toast>
    </>
  );
};
export default TeacherMain;
