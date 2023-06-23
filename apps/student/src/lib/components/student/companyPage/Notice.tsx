import { getWaitingNoticeListContentProps } from "@/src/axios/dist";
import styled from "styled-components";

const CompanyPageNoticeBox = ({
  info,
}: {
  info: getWaitingNoticeListContentProps[];
}) => {
  return (
    <MainDiv>
      {info.map((e) => (
        <div>
          <div>
            <span>
              {e.classificationResponse.map((e) => `${e.name} `)}개발자
            </span>
            <div>마감일 | ~{e.noticeOpenPeriod.endDate.substring(5, 10)}</div>
          </div>
          <p>{`• 채용인원: ${e.numberOfEmployee}명\n• 성적: ${
            e.gradeCutLine ? `${e.applicantCount}이내` : "성적무관"
          }`}</p>
          <span>
            <a href={`/notice/detail/?id=${e.noticeId}`}>자세히 보기</a>
          </span>
        </div>
      ))}
      {info.length === 0 ? "현재 진행중인 모집공고가 없습니다." : ""}
    </MainDiv>
  );
};
export default CompanyPageNoticeBox;

const MainDiv = styled.div`
  margin-top: 18px;
  width: 100%;
  > div {
    width: 413px;
    height: 184px;
    margin-bottom: 18px;
    border-radius: 8px;
    border: 1px solid rgba(16, 17, 18, 0.4);
    padding: 19px 28px;
    > span {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      > a {
        width: 50%;
        height: 43px;
        border: 1px solid #6750f8;
        border-radius: 5px;
        background-color: transparent;
        color: #6750f8;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        transition: all 0.3s ease;
        text-decoration: none;

        &:before {
          content: "";
          width: 0;
          height: 100%;
          background-color: #6750f8;
          position: absolute;
          z-index: -1;
          left: 0;
          top: 0;
          transition: all 0.3s ease;
        }

        &:hover {
          color: #f6f6f6;
          &:before {
            width: 100%;
          }
        }
      }
    }
    > p {
      white-space: pre-wrap;
      font-size: 16px;
      color: rgba(16, 17, 18, 0.6);
    }
    > div {
      display: inline-flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      > span {
        font-size: 18px;
        font-weight: 600;
      }
      > div {
        padding: 6px 20px;
        color: rgba(16, 17, 18, 0.6);
        background-color: #eeeeee;
        font-size: 15px;
        border-radius: 12px;
      }
    }
  }
`;
