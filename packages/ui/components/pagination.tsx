import React, { useCallback } from "react";
import styled from "styled-components";
export interface PaginationProps {
  nowIndex: number;
  last: number;
  changeIndex: (change: number) => void;
}
export const Pagination = ({
  nowIndex,
  last,
  changeIndex,
}: PaginationProps) => {
  return (
    <>
      <div></div>
    </>
  );
};
