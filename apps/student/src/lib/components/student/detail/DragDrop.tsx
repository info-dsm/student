import React, {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  useEffect,
} from "react";
import UploadImg from "@/public/assets/images/upload-border.png";
import styled from "styled-components";
import Image from "next/image";
import { FilesType } from "@/src/lib/types";

const DragDrop = ({
  files,
}: {
  files: {
    state: FilesType[];
    setState: (value: FilesType[]) => void;
  };
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragRef = useRef<HTMLDivElement | null>(null);

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      let tempFiles: FilesType[] = files.state;

      if (e.type === "drop") selectFiles = e.dataTransfer.files;
      else selectFiles = e.target.files;

      for (const e of selectFiles) {
        if (
          e.type === "application/haansofthwp" ||
          e.type === "application/pdf"
        )
          tempFiles = [
            ...tempFiles,
            {
              checked: false,
              file: e,
            },
          ];
      }

      files.setState(tempFiles);
    },
    [files]
  );

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  // useEffect(() => {
  //   localStorage.setItem("files", JSON.stringify(files.state));
  // }, [files.state]);

  return (
    <IsHover isDragging={isDragging}>
      <DragDropDiv ref={dragRef} isScroll={files.state.length >= 6}>
        <div>
          {files.state.length > 0 &&
            files.state.map((file: FilesType, i) => (
              <FileLabel id="check" key={i}>
                <input
                  type="checkbox"
                  checked={file.checked}
                  onChange={() => {
                    files.setState(
                      files.state.map((e: FilesType, i2) => {
                        return i === i2
                          ? { checked: !e.checked, file: e.file }
                          : e;
                      })
                    );
                  }}
                />
                <div />
                <span>
                  <span>{file.file.name}</span>
                </span>
                <svg
                  onClick={(e) => {
                    e.preventDefault();
                    files.setState(files.state.filter((_, _i) => i !== _i));
                  }}
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7"
                    stroke="black"
                    stroke-miterlimit="16"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1 1L7 7"
                    stroke="black"
                    stroke-miterlimit="16"
                    stroke-linecap="round"
                  />
                </svg>
              </FileLabel>
            ))}
        </div>

        <input
          type="file"
          accept={".pdf, .hwp"}
          id="resume"
          style={{ display: "none" }}
          multiple={true}
          onChange={(e) => onChangeFiles(e)}
        />

        {files.state.length > 0 ? (
          <></>
        ) : (
          <span>
            <Image src={UploadImg} alt="upload file image" />
            <span>파일을 여기로 드래그하세요!</span>
            <span>or</span>
            <label htmlFor="resume">
              <div>찾아보기</div>
            </label>
          </span>
        )}
      </DragDropDiv>
    </IsHover>
  );
};

export default DragDrop;

const IsHover = styled.div<{ isDragging: boolean }>`
  width: auto;
  height: auto;
  transition: 0.2s ease-in;
  background-color: ${(props) =>
    props.isDragging ? "#6750f830" : "transparent"};
`;

const FileLabel = styled.label`
  width: 100%;
  height: 70px;
  background-color: #f2f2f2;
  margin-bottom: 9px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: relative;

  > svg {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }

  > span > span {
    width: 90%;
    margin-left: 15px;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > input {
    display: none;
  }
  > div {
    display: inline-block;
    min-width: 40px;
    min-height: 40px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    border: 5px solid transparent;
  }
  > div::before,
  > div::after {
    content: "";
    display: inline-block;
    width: 6px;
    height: 0;
    background-color: #6750f8;
    position: absolute;
    transform-origin: left top;
    border-radius: 2px;
  }

  > div::before {
    top: 17px;
    left: 4px;
    transform: rotate(-45deg);
  }
  > div::after {
    top: 25px;
    left: 13px;
    transform: rotate(-135deg);
  }

  > input:checked {
    ~ div {
      transition: all 0.5s ease-out;
      border: 5px solid #6750f8;
    }
    ~ div::before {
      height: 12px;
      transition: all 0.35s ease;
    }
    ~ div::after {
      height: 20px;
      transition: all 0.35s ease 0.35s;
    }
  }
`;

const DragDropDiv = styled.div<{ isScroll: boolean }>`
  width: 100%;
  border: 1px dashed #6750f8;
  max-height: 450px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  overflow-y: ${(props) => (props.isScroll ? "scroll" : "auto")};

  > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    font-size: 16px;
    padding: 50px 0;

    > span,
    > img {
      opacity: 0.5;
    }
    > img {
      width: 15%;
      height: auto;
      margin-bottom: 9px;
    }

    > label {
      width: 100%;
      display: flex;
      justify-content: center;
      > div {
        cursor: pointer;
        width: 70%;
        height: 45px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3px;
        font-size: 15px;
        background-color: #6750f8;
        color: #fff;
        border-radius: 5px;
        transition: all 0.2s ease;

        &:hover {
          transform: translate3d(0, 10%, 0);
        }

        &:active {
          transform: translate3d(0, 20%, 0);
        }
      }
    }
  }
`;
