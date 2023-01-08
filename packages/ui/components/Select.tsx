import styled, { keyframes } from "styled-components";
import React, { useState, useLayoutEffect, useCallback } from "react";
export interface SelectProps {
  now: string;
  list: string[];
  onClick: (item: string) => void;
}
export const LittleSelectComplete = ({ now, list, onClick }: SelectProps) => {
  const [state, setState] = useState<boolean>(false);
  const AddValuePropsFunc = useCallback(
    (props: string) => {
      onClick(props);
    },
    [now]
  );
  useLayoutEffect(() => {
    document.addEventListener("click", () => {
      setState(false);
    });
  }, [state]);
  return (
    <>
      <_InfoButton
        id={now}
        state={state}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          setState(!state);
        }}
      >
        {now}
        <_SelectIcon state={state} />
      </_InfoButton>
      <_SelectList state={state}>
        {list.map((user: string) => (
          <div onMouseDown={() => AddValuePropsFunc(user)}>{user}</div>
        ))}
      </_SelectList>
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
    font-size: 0.8rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.black};
    border: 1px solid #d3d3d3;
    text-align: center;
    font: 500 normal 1rem "pretendard", sans-serif;
    line-height: 2rem;
    :last-child {
      border-radius: 0px 0px 5px 5px;
    }
  }

  div:hover {
    background-color: ${(p) => p.theme.colors.gray};
  }
`;
const _InfoButton = styled.div<{ state: boolean }>`
  width: 7.5rem;
  height: 2rem;
  border-radius: 5px 5px ${(props) => (props.state ? 0 : 5)}px
    ${(props) => (props.state ? 0 : 5)}px;
  font: 500 normal 1rem "pretendard", sans-serif;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  background-color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
`;
const _SelectIcon = styled.div<{ state: boolean }>`
  position: absolute;
  top: 1.7rem;
  left: 7rem;
  border-top: 0.5rem solid ${(props) => props.theme.colors.white};
  border-left: 0.3rem solid transparent;
  border-right: 0.3rem solid transparent;
  animation: ${(props) => (props.state ? Spin(180, 0) : Spin(0, 180))} 0.25s
    ease-in-out 0s alternate forwards;
`;
