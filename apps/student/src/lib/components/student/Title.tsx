import Link from "next/link";
import styled from "styled-components";
import Logo from "../../../../public/assets/images/logo";
import { useRouter } from "next/router";

const StudentAuthTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: {
    content1: string;
    content2: string;
    link: string;
  };
}) => {
  const router = useRouter();
  return (
    <TitleDiv>
      <div onClick={() => router.push("../")}>
        <Logo />
      </div>
      <div>{title}</div>
      <span>
        <span>{subTitle.content1}</span>
        <Link href={subTitle.link}>{subTitle.content2}</Link>
      </span>
    </TitleDiv>
  );
};
export default StudentAuthTitle;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 20px;

  svg {
    cursor: pointer;
  }

  div {
    font-size: 24px;
    font-weight: 600;
  }

  > span {
    font-weight: 500;
    font-size: 13px;
    gap: 5px;
    display: flex;
    color: rgba(16, 17, 18, 0.6);
    a {
      text-decoration: none;
      color: #6750f8;
    }
  }
`;
