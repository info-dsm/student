import React, { useCallback } from "react";
import styled from "styled-components";
export interface PaginationProps {
  nowIndex: number;
  lastIndex: number;
  changeIndex: (change: number) => void;
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
      {new Array(7).map(() => (
        <></>
      ))}
    </>
  );
};
const Template = styled.div`
  font-size: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  font: 700 normal 1rem "pretendard", sans-serif;
`;
const _Button = styled(Template)<{ selected: boolean }>`
  background-color: ${(props) =>
    props.selected ? props.theme.colors.blue : "transparent"};
  color: ${(props) =>
    props.selected ? props.theme.colors.white : props.theme.colors.black};

  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;
const _Elipsis = styled(Template)`
  color: ${(props) => props.theme.colors.black};
`;
