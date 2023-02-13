import { ChangeEvent } from "react";
import styled from "styled-components";

export interface FileManageProps {
  multiple: boolean;
  accept: ".pdf, .doc, .docx, .hwp" | "image/jpeg, image/png";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  list:
    | {
        fileName: string;
        contentType: string;
      }
    | {
        fileName: string;
        contentType: string;
      }[];
  onClick: (i?: number) => void;
}
export const FileManage = ({
  title,
  list,
  onClick,
  ...props
}: FileManageProps) => {
  return (
    <>
      <_Layout>
        <_Title>{title}</_Title>
        <_LabelFile htmlFor={title}>선택</_LabelFile>
        <_FileHidden type={"file"} id={title} {...props} />
        {Array.isArray(list) ? (
          list.map((item, i) => (
            <>
              <div>{item.fileName}</div>
              <_RemoveBtn onClick={() => onClick(i)}>X</_RemoveBtn>
            </>
          ))
        ) : (
          <div onClick={() => onClick()}>{list.fileName}</div>
        )}
      </_Layout>
    </>
  );
};
const _Layout = styled.div`
  width: 408px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const _Title = styled.div`
  width: max-content;
  font: 500 13px "Pretendard";
  color: ${({ theme }) => theme.colors.black40};
`;
const _LabelFile = styled.label`
  display: inline-block;
  padding: 5px 0;
  text-align: center;
  width: 50px;
  background-color: ${(props) => props.theme.colors.blue};
  font: 700 12px "Pretendard";
  line-height: 20px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  :hover {
    filter: brightness(0.8);
  }
`;
const _FileHidden = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
`;
const _RemoveBtn = styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  font: 700 12px "Pretendard";
  text-align: center;
  line-height: 20px;
  border: none;
  border-radius: 50%;
`;
