import {
  PostNoticeCustom,
  getClassification,
  getClassificationProps,
  postCompanyCustom,
} from "@/src/axios/dist";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { GetInitial } from "../../func";
import { useEffect } from "react";

const Select = ({
  width,
  defaultName,
  prefer,
}: {
  width: number;
  defaultName: string;
  prefer: {
    setState: (value: string) => void;
  };
}) => {
  const [dataList, setDataList] = useState<{ name: string; value: string }[]>(
    []
  );
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState<boolean | string>("");

  useEffect(() => {
    if (defaultName === "맞춤 포지션을 설정해주세요.")
      getClassification().then((res) => {
        setDataList(
          [{ name: defaultName, value: defaultName }].concat(
            res.map((e) => {
              return { name: e.name, value: e.name };
            })
          )
        );
      });
    else if (defaultName === "희망하는 기업 규모를 선택해주세요.") {
      setDataList([
        { name: "스타트업", value: "STARTUP" },
        { name: "규모가 큰 기업", value: "LARGE_SCALE" },
      ]);
    }
  }, []);

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    document.addEventListener("click", () => {
      setShow(false);
    });
  }

  return (
    <SelectDiv>
      <SearchInput
        width={width}
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
          setInputValue("");
        }}
        onChange={(e) => {
          setShow(true);
          setInputValue(e.target.value.toUpperCase().replace(/(\s*)/g, ""));
        }}
        placeholder={defaultName}
        value={inputValue}
      ></SearchInput>
      <DataList state={show}>
        {dataList.map((e, i) => (
          <>
            {GetInitial(e.name.replace(/(\s*)/g, "")).includes(inputValue) ||
            e.name.replace(/(\s*)/g, "").includes(inputValue) ? (
              <div
                key={i}
                onClick={() => {
                  setShow(false);
                  setInputValue(e.name);
                  prefer.setState(e.name);

                  if (defaultName === "맞춤 포지션을 설정해주세요.")
                    PostNoticeCustom({ classification: e.value });
                  else if (defaultName === "희망하는 기업 규모를 선택해주세요.")
                    postCompanyCustom({ classification: e.value });
                }}
                data-name={e}
              >
                {e.name}
              </div>
            ) : (
              <></>
            )}
          </>
        ))}
      </DataList>
    </SelectDiv>
  );
};
export default Select;

const SelectDiv = styled.div`
  position: absolute;
  top: 0;
  transform: translateX(-45%);
  z-index: 1;
`;

const FadeInDataList = keyframes`
0% {
    transform: translateY(-50px);
    opacity: 0;
}100% {
    transform: translateY(0);
    opacity: 1;
}
`;

const DataList = styled.div<{ state: boolean | string }>`
  position: absolute;
  animation: ${FadeInDataList} 0.5s;
  width: 100%;
  z-index: 2;
  transition: 1s;
  cursor: pointer;
  display: ${(props) => (props.state ? "block" : "none")};
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-radius: 4px;
  max-height: 14.58vmax;
  overflow-y: scroll;
  font-weight: 500;

  &::-webkit-scrollbar {
    display: none;
  }
  div {
    height: 4.48vmin;
    display: flex;
    align-items: center;
    padding-left: 15px;
    font-size: 0.9vmax;
    transition: 0.2s;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
  .hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

const SearchInput = styled.input<{ width: number }>`
  width: ${(props) => props.width}vmax;
  height: 3.94vmin;
  border: 2px solid rgba(0, 0, 0, 0.3);
  padding: 20px 10px;
  background-color: #797499;
  cursor: pointer;
  color: #fff;
  &::placeholder {
    color: ${(props) => props.theme.colors.white};
  }
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 0.9vmax;
  font-weight: 500;
`;
