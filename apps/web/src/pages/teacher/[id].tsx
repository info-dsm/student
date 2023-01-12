import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Pagination, Table, Toast, Title, List } from "ui";
import React, { useState } from "react";
import { getCompanyList } from "apis";
import { CompanyTitleData } from "../../data";
const TeacherMain: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  const [getIndex, setIndex] = useState<number>(0);
  const { status, data } = useQuery(["companyList", getIndex], async () =>
    getCompanyList(getIndex)
  );
  const Adfg = (num: number) => {
    setIndex(num - 1);
  };
  const ChangeProps = () => {};
  if (data) {
    console.log(data);
  }
  return (
    <>
      <Toast label={"company"}>
        <Table>
          <Title checked={true} data={CompanyTitleData} onClick={ChangeProps} />
          {new Array(11).fill("").map(() => (
            <>
              <List
              // checked={true}
              // data={[{ title: "언녕", width: 300, key: "123" }]}
              // onClick={ChangeProps}
              />
            </>
          ))}
        </Table>
        <Pagination nowIndex={getIndex + 1} lastIndex={3} changeIndex={Adfg} />
      </Toast>
    </>
  );
};
export default TeacherMain;
