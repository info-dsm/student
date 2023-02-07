import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
export interface InputTextProps {
  placeholder: string;
  error: boolean;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  author?: boolean;
}
export const _Input = styled.input<{ error: boolean }>`
  border-radius: 5px;
  padding: 0 16px;
  font: 500 15px "Pretendard";
  color: ${(props) =>
    props.error ? props.theme.colors.red : props.theme.colors.black};

  background-color: ${(props) =>
    props.error ? props.theme.colors.pink : props.theme.colors.gray};
`;
export const InputText = (props: InputTextProps) => (
  <_InputText type={"text"} {...props} />
);
const _InputText = styled(_Input)`
  width: 408px;
  height: 56px;
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.red : props.theme.colors.gray};
  ::placeholder {
    color: ${(props) => props.theme.colors.black40};
  }
`;
export const Password = ({ author = false, ...props }: InputTextProps) => {
  const [state, setState] = useState<boolean>(false);
  const ShowPw = useCallback(
    (checked: boolean) => {
      setState(checked);
    },
    [setState]
  );
  return (
    <_Layout>
      <_InputText type={state ? "text" : "password"} {...props} />
      <div>
        <_CheckBox
          type={"checkbox"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            ShowPw(e.target.checked)
          }
        />
        <_WatchPw>{author ? "인증코드" : "비밀번호"} 표시하기</_WatchPw>
      </div>
    </_Layout>
  );
};
const _Layout = styled.div`
  height: 80px;
  div {
    line-height: 24px;
    display: flex;
  }
`;
const _CheckBox = styled.input`
  width: 15px;
  height: 15px;
`;
const _WatchPw = styled.div`
  line-height: 24px;
  font: 500 12px "Pretendard";
`;
