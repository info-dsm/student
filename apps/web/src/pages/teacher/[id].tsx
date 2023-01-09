import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { Pagination, Toast } from "ui";

const TeacherMain: NextPage = () => {
  const Adfg = (num: number) => {
    console.log(num);
  };
  return (
    <>
      <Toast label={"company"}>
        <Pagination nowIndex={1} lastIndex={3} changeIndex={Adfg}></Pagination>
      </Toast>
    </>
  );
};
export default TeacherMain;
