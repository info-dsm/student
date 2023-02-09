import styled, { keyframes } from "styled-components";
import React, { useState, useLayoutEffect, useCallback } from "react";
import ChangePolygon from "../images/ChangePolygon";
export interface ChangeSelectProps {
  now: "승인된" | "미승인";
  list: ["승인된", "미승인"];
  onClick: (item: "승인된" | "미승인") => void;
}
export const ChangeSelect = ({ now, list, onClick }: ChangeSelectProps) => {
  const [state, setState] = useState<boolean>(false);
  const AddValuePropsFunc = useCallback(
    (props: "승인된" | "미승인") => {
      onClick(props);
    },
    [onClick]
  );
  useLayoutEffect(() => {
    document.addEventListener("click", () => {
      setState(false);
    });
  }, [state]);
  return (
    <>
      <_Layout>
        <_InfoButton
          id={now}
          {...{ state }}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            setState(!state);
          }}
        >
          <div>{now}</div>
          <_SelectIcon {...{ state }}>
            <ChangePolygon />
          </_SelectIcon>
        </_InfoButton>
        <_SelectList {...{ state }}>
          {list.map((user: "승인된" | "미승인") => (
            <div onMouseDown={() => AddValuePropsFunc(user)} key={user}>
              {user}
            </div>
          ))}
        </_SelectList>
      </_Layout>
    </>
  );
};
const Spin = (x: number, y: number) => keyframes`
 0% {
    transform: rotate(${x}deg);
 }
 100% {
  transform: rotate(${y}deg);
 }
`;
const _SelectList = styled.div<{ state: boolean }>`
  visibility: ${(props) => (props.state ? "visible" : "hidden")};
  width: auto;
  height: auto;
  div {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.white};
    position: relative;
    width: 7.5rem;
    height: 2rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.black};
    border: 1px solid #d3d3d3;
    text-align: center;
    font: 500 normal 1rem "pretendard", sans-serif;
    line-height: 2rem;
    :last-child {
      border-radius: 0px 0px 0.25rem 0.25rem;
    }
  }

  div:hover {
    background-color: ${(p) => p.theme.colors.gray};
  }
`;
const _InfoButton = styled.div<{ state: boolean }>`
  width: 7.5rem;
  height: 2rem;
  border-radius: 0.25rem 0.25rem ${(props) => (props.state ? 0 : 0.25)}rem
    ${(props) => (props.state ? 0 : 0.25)}rem;
  font: 500 normal 1rem "pretendard", sans-serif;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0 0.5px;
  div {
    text-align: center;
    width: 3.75rem;
  }
`;
const _SelectIcon = styled.span<{ state: boolean }>`
  display: flex;
  align-items: center;
  animation: ${(props) => (props.state ? Spin(0, 180) : Spin(180, 0))} 0.25s
    ease-in-out 0s alternate forwards;
`;
const _Layout = styled.div`
  margin-top: 0.5px;
`;
