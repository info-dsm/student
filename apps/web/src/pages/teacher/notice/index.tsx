import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Pagination,
  Table,
  Toast,
  Title,
  List,
  Header,
  Logo,
  SearchBar,
} from "ui";
import React, { useState } from "react";
import { CompanyTitleData } from "../../../data";
import styled from "styled-components";
import { getCompanyList } from "../../../axios/dist";
const TeacherMain: NextPage = () => {
  const router = useRouter();
  const [getIndex, setIndex] = useState<number>(0);
  // const { status, data } = useQuery(
  //   ["list", getIndex, router.query.id],
  //   async () => getCompanyList(getIndex)
  // );
  const Adfg = (num: number) => {
    setIndex(num - 1);
  };
  const ChangeProps = () => {};
  // if (data) {
  //   console.log(data);
  // }
  return (
    <>
      <_BackGround>
        <Header
          bgColor="#fff"
          admin={true}
          menu={[
            {
              onClick: () => console.log("모집공고"),
              key: "모집공고",
              selected: true,
            },
            {
              onClick: () => console.log("회사"),
              key: "회사",
              selected: false,
            },
          ]}
        >
          <Logo main={true} onClick={() => console.log("logo")} />
        </Header>
        <_Layout>
          <SearchBar
            {...{
              onClick: () => {},
              onInput: () => {},
              placeholder: "dadasd",
            }}
          />
          <Toast label={"company"}>
            <Table>
              <Title
                checked={true}
                data={CompanyTitleData}
                onChange={ChangeProps}
              />
              {new Array(11).fill("").map(() => (
                <>
                  {/* <List
                  // checked={true}
                  // data={[{ title: "언녕", width: 300, key: "123" }]}
                  // onClick={ChangeProps}
                  /> */}
                </>
              ))}
            </Table>
            <Pagination
              nowIndex={getIndex + 1}
              lastIndex={3}
              changeIndex={Adfg}
            />
          </Toast>
        </_Layout>
      </_BackGround>
    </>
  );
};
export default TeacherMain;
const _Layout = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    margin-bottom: 100px;
  }
`;
const _BackGround = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;
