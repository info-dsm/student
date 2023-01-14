import React, { useCallback } from "react";
import styled from "styled-components";
export interface PaginationProps {
  nowIndex: number;
  lastIndex: number;
  changeIndex: (index: number) => void;
}
export const Pagination = ({
  nowIndex,
  lastIndex,
  changeIndex,
}: PaginationProps) => {
  const ChangeIndex = useCallback(
    (index: number) => {
      changeIndex(index);
    },
    [changeIndex]
  );
  return (
    <>
      {lastIndex < 8 ? (
        <_Container width={(lastIndex - 1) * 3.5 + 6.5}>
          <_NavBar
            onClick={() => {
              if (nowIndex > 1) {
                ChangeIndex(nowIndex - 1);
              }
            }}
          >
            &lt;
          </_NavBar>
          {new Array(lastIndex).fill("").map((item: string, index: number) => (
            <>
              <_Button
                selected={nowIndex === index + 1}
                onClick={() => ChangeIndex(index + 1)}
                key={index + 1}
              >
                {index + 1}
              </_Button>
            </>
          ))}
          <_NavBar
            onClick={() => {
              if (nowIndex < lastIndex) {
                ChangeIndex(nowIndex + 1);
              }
            }}
          >
            &gt;
          </_NavBar>
        </_Container>
      ) : (
        <_Container width={27.5}>
          <_NavBar
            onClick={() => {
              if (nowIndex > 1) {
                ChangeIndex(nowIndex - 1);
              }
            }}
          >
            &lt;
          </_NavBar>
          <_Button
            selected={nowIndex === 1}
            onClick={() => ChangeIndex(1)}
            key={1}
          >
            1
          </_Button>
          {nowIndex < 6 ? (
            <_Button
              selected={nowIndex === 2}
              onClick={() => ChangeIndex(2)}
              key={2}
            >
              2
            </_Button>
          ) : (
            <_Elipsis>•••</_Elipsis>
          )}
          {(nowIndex < 6
            ? [3, 4, 5]
            : nowIndex > lastIndex - 5
            ? [lastIndex - 4, lastIndex - 3, lastIndex - 2]
            : [nowIndex - 1, nowIndex, nowIndex + 1]
          ).map((item: number) => (
            <_Button
              selected={nowIndex === item}
              onClick={() => ChangeIndex(item)}
              key={item}
            >
              {item}
            </_Button>
          ))}
          {nowIndex > lastIndex - 5 ? (
            <_Button
              selected={nowIndex === lastIndex - 1}
              onClick={() => ChangeIndex(lastIndex - 1)}
              key={lastIndex - 1}
            >
              {lastIndex - 1}
            </_Button>
          ) : (
            <_Elipsis>•••</_Elipsis>
          )}
          <_Button
            selected={nowIndex === lastIndex}
            onClick={() => ChangeIndex(lastIndex)}
            key={lastIndex}
          >
            {lastIndex}
          </_Button>
          <_NavBar
            onClick={() => {
              if (nowIndex < lastIndex) {
                ChangeIndex(nowIndex + 1);
              }
            }}
          >
            &gt;
          </_NavBar>
        </_Container>
      )}
    </>
  );
};
const _Button = styled.div<{ selected: boolean }>`
  font: 700 normal 1rem "pretendard", sans-serif;
  height: 3rem;
  width: 3rem;
  text-align: center;
  line-height: 3rem;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.blue : "transparent"};
  color: ${(props) =>
    props.selected ? props.theme.colors.white : props.theme.colors.black};
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;
const _Elipsis = styled.div`
  font: 700 normal 1rem "pretendard", sans-serif;
  width: 3rem;
  height: 3rem;
  text-align: center;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.black};
`;
const _NavBar = styled.div`
  font: 400 normal 1.2rem "pretendard", sans-serif;
  width: 1.2rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};
  :hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;
const _Container = styled.div<{ width: number }>`
  margin: 1rem auto;
  background-color: aliceblue;
  display: flex;
  height: 3rem;
  width: ${(props) => props.width}rem;
  justify-content: space-between;
`;
