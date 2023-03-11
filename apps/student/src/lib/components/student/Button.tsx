import Link from "next/link";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import styled from "styled-components";

const StudentAuthButton = ({
  request,
  setStatus,
  content,
  top,
  clickEvent,
  check,
}: {
  top: number;
  request: {};
  setStatus: (value: {
    email: "normal" | "error";
    password: "normal" | "error";
    emailCode: "normal" | "error";
    name: "normal" | "error";
    studentKey: "normal" | "error";
    githubLink: "normal" | "error";
    passwordCheck: "normal" | "error";
  }) => void;
  content: {
    content1: string;
    content2: string;
    content3: string;
    link: string;
  };
  check?: {
    email: "unChecked" | "checked" | "failed";
    // student: "unChecked" | "checked" | "failed";
    password: "unChecked" | "checked" | "failed";
  };
  clickEvent: () => void;
}) => {
  const router = useRouter();
  return (
    <>
      <LoginBtn top={top} color={Object.values(request).includes("") ? "#888888" : "#6750f8"}>
        <button
          onClick={() => {
            if (Object.values(request).includes("")) {
              setStatus(
                Object.keys(request).reduce(
                  (acc, elem) => {
                    return {
                      ...acc,
                      [elem]:
                        request[elem as keyof typeof request] === ""
                          ? "error"
                          : "normal",
                    };
                  },
                  {
                    email: "normal",
                    password: "normal",
                    emailCode: "normal",
                    name: "normal",
                    studentKey: "normal",
                    githubLink: "normal",
                    passwordCheck: "normal",
                  }
                )
              );
            } else {
              if (check) {
                if (
                  Object.values(check).includes("failed") ||
                  Object.values(check).includes("unChecked")
                ) {
                  //경고 alert
                } else clickEvent();
              } else clickEvent();
            }
          }}
        >
          {content.content1}
        </button>
        <div>or</div>
        <span>
          <span>{content.content2}</span>
          <a
            onClick={() => {
              router.push(content.link);
            }}
          >
            {content.content3}
          </a>
        </span>
      </LoginBtn>
    </>
  );
};
export default StudentAuthButton;

const LoginBtn = styled.div<{ top: number; color: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  button {
    background-color: ${props => props.color};
    cursor: pointer;
    width: 100%;
    height: 48px;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-top: ${(props) => props.top}px;
    color: #f8f8f9;
    font-size: 20px;
    font-weight: 600;
  }
  div {
    color: rgba(16, 17, 18, 0.4);
    font-size: 14px;
    font-weight: 600;
  }
  > span {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    gap: 5px;
    color: rgba(16, 17, 18, 0.8);
    a {
      cursor: pointer;
      text-decoration: none;
      color: #6750f8;
    }
  }
`;
