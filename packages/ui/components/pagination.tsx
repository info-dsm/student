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
    [nowIndex]
  );
  return (
    <>
      {lastIndex < 8 ? (
        <_Container width={(lastIndex - 1) * 70 + 130}>
          <_NavBar
            onClick={() => {
              if (nowIndex > 1) {
                ChangeIndex(nowIndex - 1);
              }
            }}
          >
            &lt;
          </_NavBar>
          {new Array(lastIndex).fill("").map((item, index: number) => (
            <>
              <_Button
                selected={nowIndex === index + 1}
                onClick={() => ChangeIndex(index + 1)}
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
        <_Container width={550}>
          <_NavBar
            onClick={() => {
              if (nowIndex > 1) {
                ChangeIndex(nowIndex - 1);
              }
            }}
          >
            &lt;
          </_NavBar>
          <_Button selected={nowIndex === 1} onClick={() => ChangeIndex(1)}>
            1
          </_Button>
          {nowIndex < 6 ? (
            <_Button selected={nowIndex === 2} onClick={() => ChangeIndex(2)}>
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
            >
              {item}
            </_Button>
          ))}
          {nowIndex > lastIndex - 5 ? (
            <_Button
              selected={nowIndex === lastIndex - 1}
              onClick={() => ChangeIndex(lastIndex + 1)}
            >
              {lastIndex - 1}
            </_Button>
          ) : (
            <_Elipsis>•••</_Elipsis>
          )}
          <_Button
            selected={nowIndex === lastIndex}
            onClick={() => ChangeIndex(lastIndex)}
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
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.blue : "transparent"};
  color: ${(props) =>
    props.selected ? props.theme.colors.white : props.theme.colors.black};
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;
const _Elipsis = styled.div`
  font: 700 normal 1rem "pretendard", sans-serif;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.black};
`;
const _NavBar = styled.div`
  font: 500 normal 1rem "pretendard", sans-serif;
  width: 1rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};
  :hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;
const _Container = styled.div<{ width: number }>`
  margin: 0 auto;

  display: flex;
  height: 2.5rem;
  width: ${(props) => props.width}px;
  justify-content: space-between;
`;
