import styled from "styled-components";
import ClosedNoticePlaceHolder from "../closedPlaceholder";
import StudentClosedNotice from "../closedNotice";
import NoticePlaceHolder from "../placeholder";
import StudentNotice from "../notice";
import {
  getClosedNoticeListContentProps,
  getWaitingNoticeListContentProps,
} from "@/src/axios/dist";

const NoticeList = ({
  cnt,
  notice,
  closedNotice,
}: {
  cnt: number;
  notice: getWaitingNoticeListContentProps[];
  closedNotice: getClosedNoticeListContentProps[];
}) => {
  return (
    <>
      <Content>
        <Kind2>
          <div>
            <span>모집공고</span>
          </div>
          {cnt > 0 ? (
            <>
              <NoticeContainer id="noticeContainer">
                {notice.length > 0 ? (
                  <>
                    {notice.map((t) => (
                      // eslint-disable-next-line react/jsx-key
                      <StudentNotice info={t} />
                    ))}
                  </>
                ) : (
                  <>모집 공고가 없습니다...</>
                )}
              </NoticeContainer>
            </>
          ) : (
            <>
              <NoticePlaceHolder />
              <NoticeContainer id="noticeContainer" style={{ width: "0px" }} />
            </>
          )}
        </Kind2>

        <Kind2>
          <div>
            <span>마감된 공고</span>
          </div>
          {cnt > 0 ? (
            <>
              {closedNotice.length > 0 ? (
                <>
                  {closedNotice.map((t) => (
                    // eslint-disable-next-line react/jsx-key
                    <StudentClosedNotice info={t} />
                  ))}
                </>
              ) : (
                <>마감된 공고가 없습니다..</>
              )}
            </>
          ) : (
            <ClosedNoticePlaceHolder />
          )}
        </Kind2>
      </Content>
    </>
  );
};
export default NoticeList;

const NoticeContainer = styled.div`
  width: 60.2vmax;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 10%;
  /* @media (max-width: 1700px) {
    width: 950px;
    grid-template-columns: repeat(3, 1fr);
  } */
`;

const Content = styled.div`
  padding: 0px 12.3vmax;
  display: flex;
  margin-top: 50px;
`;

const Kind2 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25vmax;
  position: relative;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    span {
      font-weight: 600;
      font-size: 1.25vmax;
      + span {
        font-weight: 400;
        font-size: 0.88vmax;
      }
    }
  }
`;
