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
  LittleSelectComplete,
  Wait,
} from "ui";
import React, { useState, useCallback, useLayoutEffect } from "react";
import { CompanyTitleData } from "../../../data";
import styled from "styled-components";
import { getCompanyList } from "../../../axios/dist";
const TeacherMain: NextPage = () => {
  const router = useRouter();
  const [getIndex, setIndex] = useState<number>(0);
  const [now, setNow] = useState<"기본" | "년도 검색">("기본");
  const { status, data } = useQuery(["list", getIndex], async () =>
    getCompanyList(getIndex)
  );
  const [remainCount, setRemainCount] = useState<number>(0);
  const [check, setCheck] = useState<boolean[]>([false]);
  useLayoutEffect(() => {
    if (data) {
      setRemainCount(11 - data.content.length);
      setCheck(new Array(data.content.length).fill(false));
    }
  }, [data]);
  const Adfg = (num: number) => {
    setIndex(num - 1);
  };
  const ChangeProps = useCallback(
    (item: "기본" | "년도 검색") => {
      setNow(item);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [now, setNow]
  );

  const CheckAll = useCallback(() => {
    console.log(check);
    if (check.every((v) => v === true)) {
      setCheck(new Array(check.length).fill(false));
    } else {
      setCheck(new Array(check.length).fill(true));
    }
  }, [check]);
  const ChangeCheck = useCallback(
    (index: number) => {
      setCheck(
        check.map((item, i) => {
          if (i === index) {
            return !item;
          }
          return item;
        })
      );
    },
    [check]
  );
  return (
    <>
      <_BackGround>
        <Header
          bgColor="#fff"
          admin={true}
          menu={[
            {
              onClick: () => router.push("/teacher/notice"),
              key: "모집공고",
              selected: false,
            },
            {
              onClick: () => router.push("/teacher/company"),
              key: "회사",
              selected: true,
            },
          ]}
        >
          <Logo main={true} onClick={() => router.push("/teacher/notice")} />
        </Header>
        <_Layout>
          <_Sort>
            <LittleSelectComplete
              {...{
                now,
                list: ["기본", "년도 검색"],
                onClick: (item: "기본" | "년도 검색") => {
                  ChangeProps(item);
                },
              }}
            />
            <SearchBar
              {...{
                onClick: () => {},
                onInput: () => {},
                placeholder: "dadasd",
              }}
            />
          </_Sort>

          <Toast label={"company"}>
            <Table>
              <Title
                checked={check.every((value) => value === true)}
                data={CompanyTitleData}
                onChange={CheckAll}
              />
              {status === "loading" ? (
                new Array(11).fill("").map((a, i) => (
                  <>
                    <Wait key={i} />
                  </>
                ))
              ) : status === "error" ? (
                new Array(11).fill("").map((a, i) => (
                  <>
                    <Wait key={i} />
                  </>
                ))
              ) : (
                <>
                  {data.content.map((list, i) => (
                    <List
                      onChange={() => {
                        ChangeCheck(i);
                      }}
                      {...{ list }}
                      key={i}
                      checked={check[i]}
                    />
                  ))}
                  {remainCount ? (
                    new Array(remainCount)
                      .fill("")
                      .map((a, i) => <Wait key={data.content.length + i} />)
                  ) : (
                    <></>
                  )}
                </>
              )}
              <_Bottom>11개 선택됨</_Bottom>
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
  gap: 1rem;
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
const _Sort = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 70rem;
  line-height: 60px;
`;
const _Bottom = styled.div`
  width: 60rem;
  height: 2rem;
  font: 700 1rem "Pretendard";
  color: ${({ theme }) => theme.colors.black};
  line-height: 2rem;
`;
