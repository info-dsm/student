import { getNoticeDetailProps } from "../../../axios/dist";
import React from "react";
import styled from "styled-components";
import NoticeDetailClassification from "./Classification";

const Welfare = ({ noticeInfo }: { noticeInfo: getNoticeDetailProps }) => {
  const { mealSupport, welfare, workTime, otherFeatures } = noticeInfo;
  const {
    dormitorySupport,
    selfDevelopmentPay,
    equipmentSupport,
    youthTomorrowChaeumDeduction,
    alternativeMilitaryPlan,
    elseSupport,
  } = welfare;
  const { breakfast, lunch, dinner, mealSupportPay } = mealSupport;
  const {
    commuteEndTime,
    commuteStartTime,
    commuteEndTimeMinute,
    commuteStartTimeMinute,
  } = workTime;

  return (
    <>
      <MainDiv>
        <NoticeDetailClassification name={"복리후생"} />
        <GridDiv>
          <div>
            <div>식사</div>
            {Object.values(mealSupport).includes(true) || mealSupportPay > 0 ? (
              <div>
                {breakfast ? <div>• 아침제공</div> : ""}
                {lunch ? <div>• 점심제공</div> : ""}
                {dinner ? <div>• 저녁제공</div> : ""}
                {mealSupportPay > 0 ? (
                  <div>• 식비지원 : ${mealSupportPay}</div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div>식사 지원이 없습니다.</div>
            )}
          </div>
          <div>
            <div>복지</div>
            {Object.values(welfare).includes(true) ? (
              <div>
                {dormitorySupport ? <div>• 기숙사 지원</div> : ""}
                {selfDevelopmentPay ? <div>• 자기계발비 지원</div> : ""}
                {equipmentSupport ? <div>• 장비 지원</div> : ""}
                {youthTomorrowChaeumDeduction ? (
                  <div>• 청년내일채움공제</div>
                ) : (
                  ""
                )}
                {alternativeMilitaryPlan ? <div>• 산업기능요원</div> : ""}
              </div>
            ) : (
              <div>복지 혜택이 없습니다.</div>
            )}
          </div>
          <div>
            <div>출퇴근 시간</div>
            {commuteEndTime || commuteStartTime ? (
              <>
                <div>
                  {commuteStartTime
                    ? `${commuteStartTime}시 ${
                        commuteStartTimeMinute
                          ? `${commuteStartTimeMinute}분`
                          : ""
                      } 출근`
                    : ""}
                </div>
                <div>
                  {commuteEndTime
                    ? `${commuteEndTime}시 ${
                        commuteEndTimeMinute ? `${commuteEndTimeMinute}분` : ""
                      } 퇴근`
                    : ""}
                </div>
              </>
            ) : (
              <div>자율출퇴근입니다.</div>
            )}
          </div>
        </GridDiv>
        <GridDiv>
          <div style={{ width: "1000px" }}>
            <div>기타</div>
            <span>{elseSupport ? elseSupport : "기타 사항이 없습니다."}</span>
          </div>
        </GridDiv>
      </MainDiv>
    </>
  );
};

export default Welfare;

const MainDiv = styled.div`
  margin-top: 120px;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 40px;
  grid-row-gap: 62px;
  > div {
    width: 400px;
    font-size: 16px;
    > div:nth-child(1) {
      font-weight: 600;
      color: #6750f8;
      margin-bottom: 16px;
    }

    > div:nth-child(2),
    > span {
      color: #101112;
      font-weight: 500;
    }
    > div:nth-child(2) {
      margin-bottom: 0px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
