import styled from "styled-components";

interface AuthInputProps {
  type: "normal" | "error";
  placeHolder: string;
  onChange: ({
    e,
    name,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    name: string;
  }) => void;
  name: string;
  subClick?: {
    content: string;
    event: () => void;
  };
  keyDownEvent?: () => void;
}

export const AuthInput = ({
  type,
  placeHolder,
  onChange,
  name,
  subClick,
  keyDownEvent,
}: AuthInputProps) => {
  return (
    <InputDiv>
      <_Input
        inputType={type}
        placeholder={placeHolder}
        onChange={(e) => onChange({ e: e, name: name })}
        type={
          name.substring(0, 8) === "password"
            ? "password"
            : name === "entranceYear"
            ? "number"
            : "text"
        }
        autoComplete="off"
      />
      <>
        {subClick ? (
          <span onClick={() => subClick.event()}>{subClick.content}</span>
        ) : (
          ""
        )}
      </>
    </InputDiv>
  );
};

const InputDiv = styled.div`
  position: relative;
  span {
    position: absolute;
    right: 24px;
    font-size: 13px;
    font-weight: 500;
    color: #6750f8;
    top: 50%;
    transform: translateY(-100%);
    cursor: pointer;
  }
`;

const _Input = styled.input<{
  inputType: "normal" | "error";
}>`
  width: 100%;
  height: 48px;
  background-color: ${(props) =>
    props.inputType === "normal" ? "#eaeaea" : "#F8CFCF"};
  border-radius: 5px;
  outline: none;
  border: ${(props) =>
    props.inputType === "normal" ? "none" : "1px solid #E24646"};
  padding-left: 16px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
  ::placeholder {
    color: ${(props) =>
      props.inputType === "normal" ? "rgba(16, 17, 18, 0.4)" : "#E24646"};
  }
`;

export default AuthInput;
