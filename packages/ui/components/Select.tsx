import styled, { keyframes } from "styled-components";
import React, { useState, useLayoutEffect, useCallback } from "react";
import HighPolygon from "../images/HighPolygon";
export interface SelectProps {
  now: "기본" | "년도 검색";
  list: ["기본", "년도 검색"];
  onClick: (item: "기본" | "년도 검색") => void;
}
export const LittleSelectComplete = ({ now, list, onClick }: SelectProps) => {
  const [state, setState] = useState<boolean>(false);
  const AddValuePropsFunc = useCallback(
    (props: "기본" | "년도 검색") => {
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
        {" "}
        <_InfoButton
          id={now}
          {...{ state }}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            setState(!state);
          }}
        >
          {now}
          <_SelectIcon {...{ state }}>
            {" "}
            <HighPolygon />
          </_SelectIcon>
        </_InfoButton>
        <_SelectList {...{ state }}>
          {list.map((user: "기본" | "년도 검색") => (
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
    width: 150px;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.black};
    border: 1px solid #d3d3d3;
    text-align: center;
    font: 500 normal 20px "pretendard", sans-serif;
    line-height: 40px;
    :last-child {
      border-radius: 0px 0px 5px 5px;
    }
  }

  div:hover {
    background-color: ${(p) => p.theme.colors.gray};
  }
`;
const _InfoButton = styled.div<{ state: boolean }>`
  width: 150px;
  height: 40px;
  border-radius: 5px 5px ${(props) => (props.state ? 0 : 5)}px
    ${(props) => (props.state ? 0 : 5)}px;
  font: 500 normal 20px "pretendard", sans-serif;
  line-height: 40px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  background-color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0 10px;
`;
const _SelectIcon = styled.div<{ state: boolean }>`
  animation: ${(props) => (props.state ? Spin(0, 180) : Spin(180, 0))} 0.25s
    ease-in-out 0s alternate forwards;
`;
const _Layout = styled.div`
  margin-top: 10px;
`;
