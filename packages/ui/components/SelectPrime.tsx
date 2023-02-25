import styled, { keyframes } from "styled-components";
import { useState, useLayoutEffect } from "react";
import SelectDown from "../images/SelectDown";
export interface SelectPrimeProps {
  list: {
    process: string;
    meaning: string;
  }[];
  onChange: (props: string) => void;
  write: string;
  onClick: () => void;
}
export const SelectPrime = ({
  list,
  onChange,
  write,
  onClick,
}: SelectPrimeProps) => {
  const [state, setState] = useState<boolean>(false);
  const AddValuePropsFunc = (props: string) => {
    onChange(props);
    setState(false);
  };
  useLayoutEffect(() => {
    document.addEventListener("click", () => {
      setState(false);
    });
  }, [state]);
  return (
    <>
      <_Container>
        <_Tb>
          <div>
            <_Input
              key={write}
              id={write}
              state={state}
              onClick={(e) => {
                e.stopPropagation();
                setState(!state);
              }}
            >
              {write}
              <_Layout {...{ state }}>
                <SelectDown />
              </_Layout>
            </_Input>
            <DataList state={state}>
              <_Out>
                {list.map((user) => (
                  <_Lay
                    onMouseDown={() => AddValuePropsFunc(user.meaning)}
                    key={user.meaning}
                  >
                    {user.meaning}
                  </_Lay>
                ))}
              </_Out>
            </DataList>
          </div>
          <_RemoveBtn {...{ onClick }}>X</_RemoveBtn>
        </_Tb>
      </_Container>
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
  width: 120px;
  height: 90px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
  visibility: ${(props) => (props.state ? "visible" : "hidden")};
  overflow: hidden;
`;
const _Out = styled.div`
  width: 118px;
  height: 80px;
  margin-top: 3px;
  overflow-y: scroll;
  scroll-padding-top: 20px;
  cursor: pointer;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    width: 3px;
    height: 127px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.skeleton};
  }
  &::-webkit-scrollbar-thumb {
    padding-top: 9px;
    height: 28px;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.blue};
  }
  overflow-x: hidden;
`;
const _Lay = styled.div`
  padding-left: 15px;
  width: 120px;
  height: 20px;
  font: 500 normal 14px "Pretendard", sans-serif;
  line-height: 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black40};
  :hover {
    background-color: ${(props) => props.theme.colors.black40};
    color: ${(props) => props.theme.colors.white};
  }
`;
const _Input = styled.div<{ state: boolean }>`
  width: 120px;
  height: 30px;
  border-radius: 5px 5px ${(props) => (props.state ? 0 : 5)}px
    ${(props) => (props.state ? 0 : 5)}px;
  font: 500 normal 14px "Pretendard", sans-serif;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 20px;
  border: none;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray2};
`;
const _Layout = styled.div<{ state: boolean }>`
  height: max-content;
  animation: ${(props) => (props.state ? Spin(60, 0) : Spin(0, 60))} 0.25s
    ease-in-out 0s alternate forwards;
`;
const _Tb = styled.div`
  width: 150px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  display: flex;
`;
const _Container = styled.div`
  width: 150px;
  height: 120px;
`;
const _RemoveBtn = styled.button`
  font: 700 normal 14px "Pretendard", sans-serif;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
`;
