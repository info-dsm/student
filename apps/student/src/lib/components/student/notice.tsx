import { getWaitingNoticeListContentProps } from "../../../axios/dist";
import styled from "styled-components";

const StudentNotice = ({
  info,
}: {
  info: getWaitingNoticeListContentProps;
}) => {
  return (
    <NoticeDiv href={`/notice/detail/?id=${info.noticeId}`}>
      <img src={info.company.imageList[0]} alt="" />
      <h1>
        {info.classificationResponse.map((t, i, a) => (
          <>
            {t.name}
            {a.length - 1 !== i ? ", " : " "}
          </>
        ))}
        모집합니다.
      </h1>
      <span>{info.company.companyName}</span>
      <Address>
        {/* <span>지원자 수 {info.applicantCount}명</span> */}
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
  width: 19.3vmax;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 35px;
  padding: 30px;
  padding-bottom: 50px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 18vmin;
    margin-bottom: 17px;
    object-fit: contain;
  }
  > h1 {
    font-weight: 600;
    font-size: 1vmax;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > span {
    font-size: 0.6vmax;
    font-weight: 600;
  }
`;

const Address = styled.div`
  span {
    font-weight: 700;
    font-size: 0.7vmax;
    color: rgba(16, 17, 18, 0.65);
  }
`;

const Part = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  font-size: 0.6vmax;
  gap: 20px;
  line-height: 0px;
`;
