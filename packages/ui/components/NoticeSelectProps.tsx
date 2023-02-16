import { ChangeEvent } from "react";
import styled from "styled-components";
import { CheckBox } from "./CheckBox";

export interface NoticeSelectProps {
  certificateList: {
    list: {
      bigClassification: string;
      small: { name: string; on: boolean }[];
    }[];
    now: number;
  };
  onClick: (i: number) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  change: (i: number) => void;
}
export const NoticeSelect = ({
  certificateList,
  onChange,
  change,
  onClick,
}: NoticeSelectProps) => {
  return (
    <_MainDiv>
      <_Layout>
        {certificateList.list.map((item, i) => (
          <_Box
            status={i === certificateList.now}
            {...{ onClick: () => onClick(i) }}
            key={item.bigClassification}
          >
            {item.bigClassification}
          </_Box>
        ))}
      </_Layout>
      <_Layout>
        <_CheckBox
          type={"checkbox"}
          {...{ onChange }}
          checked={certificateList.list[certificateList.now].small
            .map((item, i) => item.on)
            .every((v) => v === true)}
        />
        <_Text>전체 선택</_Text>
      </_Layout>
      <_Layout>
        {certificateList.list[certificateList.now].small.map((item, i) => (
          <CheckBox
            onChange={() => change(i)}
            text={item.name}
            checked={item.on}
            key={item.name}
          />
        ))}
      </_Layout>
      <_Layout>
        <_Content>
          <span>
            {certificateList.list[certificateList.now].bigClassification}{" "}
          </span>
          에서{" "}
          <b>
            {certificateList.list[certificateList.now].small
              .map((v: { name: string; on: boolean }) => {
                if (v.on) {
                  return v.name;
                }
              })
              .filter((v) => v)
              .join(", ")}
          </b>
          (이)가 선택됨.
        </_Content>
      </_Layout>
    </_MainDiv>
  );
};
const _CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;
const _Content = styled.div`
  b {
    font: 800 16px "Pretendard";
    color: ${({ theme }) => theme.colors.black};
  }
  span {
    font: 800 16px "Pretendard";
    color: ${({ theme }) => theme.colors.blue};
  }
  font: 500 16px "Pretendard";
  color: ${({ theme }) => theme.colors.black};
`;
const _Text = styled.div`
  font: 700 16px "Pretendard";
  color: ${({ theme }) => theme.colors.black};
  line-height: 25px;
`;
const _MainDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const _Layout = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;
const _Box = styled.div<{ status: boolean }>`
  width: 280px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme, status }) =>
    status ? theme.colors.blue : theme.colors.black};
  font: 700 20px "Pretendard";
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  border: 1px solid
    ${({ theme, status }) => (status ? theme.colors.blue : theme.colors.black)};
  border-radius: 5px;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }
`;
