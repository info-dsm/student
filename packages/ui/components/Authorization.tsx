import styled from "styled-components";
import { _Input, InputTextProps } from "./InputText";
export interface AuthorizationProps extends InputTextProps {
  onClick: () => void;
  aut: string;
  comment: string;
  value: string;
}
export const AuthorizationInput = (props: AuthorizationProps) => {
  const { onClick, aut, value, placeholder, comment, ...item } = props;
  return (
    <_Container error={item.error}>
      <_AuthorizationInput
        type={"text"}
        {...item}
        placeholder={item.error ? comment : placeholder}
        defaultValue={item.error ? "" : value}
      />
      <_Layout>
        <span {...{ onClick }}>{aut}</span>
      </_Layout>
    </_Container>
  );
};
const _Container = styled.div<{ error: boolean }>`
  width: 408px;
  height: 56px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.error ? props.theme.colors.pink : props.theme.colors.gray};
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.red : props.theme.colors.gray};
  display: flex;
`;
const _AuthorizationInput = styled(_Input)`
  border: none;
  width: 300px;
  height: 54px;
  ::placeholder {
    color: ${(props) =>
      props.error ? props.theme.colors.red : props.theme.colors.black40};
  }
`;
const _Layout = styled.div`
  line-height: 56px;
  width: max-content;
  span {
    font: 500 13px "Pretendard";
    color: ${(props) => props.theme.colors.blue};
    cursor: pointer;
  }
`;
