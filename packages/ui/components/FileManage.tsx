import { ChangeEvent } from "react";
import styled from "styled-components";

export interface FileManageProps {
  multiple: boolean;
  accept: ".pdf, .doc, .docx, .hwp" | "image/jpeg, image/png";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  list: (File | null)[] | null;
  onClick: (i: number) => void;
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
        <_Flex>
          <_LabelFile htmlFor={title}>선택</_LabelFile>
          <_FileHidden type={"file"} id={title} {...props} />
          {list.map((item: File, i: number) => (
            <>
              <_LayoutText key={item.name}>
                <div>
                  {item.name.length > 10
                    ? `${item.name.substring(0, 10)}...`
                    : item.name}
                </div>
                <_RemoveBtn onClick={() => onClick(i)}>X</_RemoveBtn>
              </_LayoutText>
            </>
          ))}
        </_Flex>
      </_Layout>
    </>
  );
};
const _Layout = styled.div`
  width: 408px;
  height: max-content;
  display: flex;
  gap: 3px;
  flex-direction: column;
  justify-content: space-between;
`;
const _Flex = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
const _LayoutText = styled.div`
  display: flex;
  gap: 10px;
  height: 30px;
  align-items: center;
  div {
    font: 500 13px "Pretendard";
    color: ${({ theme }) => theme.colors.black};
    line-height: 20px;
  }
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
  height: 30px;
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
const _RemoveBtn = styled.button`
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  font: 700 12px "Pretendard";
  text-align: center;
  line-height: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    filter: brightness(0.8);
  }
`;
