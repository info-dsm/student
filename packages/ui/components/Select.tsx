import styled, { keyframes } from "styled-components";
import React, { useState, useEffect } from "react";
export interface SelectUi {
  selectProps: string[];
  onClick: (item: string) => void;
}
export const SelectComplete = ({ selectProps, onClick }: any) => {
  const [state, setState] = useState<boolean>(false);
  const [write, setWrite] = useState(selectProps[0]);
  const AddValuePropsFunc = (props) => {
    setWrite(props);
    setState(false);
    onClick(props);
  };
  useEffect(() => {
    document.addEventListener("click", () => {
      setState(false);
    });
  }, [state]);
  return (
    <>
      <InputProps
        width={200}
        id={write}
        state={state}
        onClick={(e) => {
          e.stopPropagation();
          setState(!state);
        }}
      >
        {write}
        <SelectIcon state={state} />
      </InputProps>
      <DataList state={state}>
        <ul>
          {selectProps.map((user: string) => (
            // eslint-disable-next-line react/jsx-key
            <li onMouseDown={() => AddValuePropsFunc(user)}>{user}</li>
          ))}
        </ul>
      </DataList>
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
const DataList = styled.div<{ state: boolean }>`
  width: 195px;
  position: relative;
  z-index: 2;
  visibility: ${(props) => (props.state ? "visible" : "hidden")};
  padding: 0;

  ul {
    position: relative;
    list-style-type: none;
    margin-top: -3.5px;
    border-radius: 0px 0px 10px 10px;
    width: 205px;

    padding: 0 0 10px 0;
  }
  li {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.white};
    position: relative;
    padding-top: 6px;
    width: 215px;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.black};
    border: 1px solid #d3d3d3;
    text-align: center;
    font: 700 normal 20px "Noto Sans";
  }

  li:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;
const InputProps = styled.div<{ width: number; state: boolean }>`
  padding-top: 11px;
  padding-right: 15px;
  width: ${(props) => props.width}px;
  height: 40px;
  border-radius: 10px 10px ${(props) => (props.state ? 0 : 10)}px
    ${(props) => (props.state ? 0 : 10)}px;
  font: 700 normal 20px "Noto Sans";
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.colors.blue};
  margin: 0px;
  cursor: pointer;
`;
const SelectIcon = styled.div<{ state: boolean }>`
  position: absolute;
  top: 17px;
  left: 185px;
  border-bottom: 10px solid none;
  border-top: 15px solid ${(props) => props.theme.colors.white};
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  animation: ${(props) => (props.state ? Spin(180, 0) : Spin(0, 180))} 0.25s
    ease-in-out 0s alternate forwards;
`;
