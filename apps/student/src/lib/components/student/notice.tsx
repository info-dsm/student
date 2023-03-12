import { getWaitingNoticeListContentProps } from "../../../axios/dist";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const StudentNotice = ({
  info,
}: {
  info: getWaitingNoticeListContentProps;
}) => {
  const router = useRouter();
  return (
    <NoticeDiv
      onClick={() => {
        router.push(`/notice/detail/${info.noticeId}`);
      }}
    >
      <img src={info.company.imageList[0]} alt="" />
      <h1>
        {info.classificationResponse.map((t, i, a) => (
          <>
            {t.name}
            {a.length - 1 !== i ? ", " : " "}
          </>
        ))}
        개발자 모집합니다.
      </h1>
      <span>{info.company.companyName}</span>
      <Address>
        <span>지원자 수 {info.applicantCount}명</span>
      </Address>
      <Part>
        {info.classificationResponse.map((t) => (
          <div>{t.name}</div>
        ))}
      </Part>
    </NoticeDiv>
  );
};

export default StudentNotice;

const NoticeDiv = styled.a`
  text-decoration: none;
  * {
    color: #101112;
  }
  cursor: pointer;
  width: 280px;

  img {
    width: 100%;
    height: 169px;
    margin-bottom: 17px;
    object-fit: cover;
  }
  > h1 {
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > span {
    font-size: 13px;
    font-weight: 600;
  }
`;

const Address = styled.div`
  span {
    font-weight: 700;
    font-size: 14px;
    color: rgba(16, 17, 18, 0.65);
  }
`;

const Part = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  font-size: 13px;
  gap: 20px;
  line-height: 0px;
  margin-bottom: 65px;
`;
