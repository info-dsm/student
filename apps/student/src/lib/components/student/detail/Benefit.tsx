import { getNoticeDetailProps } from "@/src/axios/dist";
import styled from "styled-components";

const DetailPageBenefit = ({ info }: { info: getNoticeDetailProps }) => {
  const { mealSupport, welfare } = info;
  const {
    dormitorySupport,
    selfDevelopmentPay,
    equipmentSupport,
    youthTomorrowChaeumDeduction,
    alternativeMilitaryPlan,
    elseSupport,
  } = welfare;
  const { breakfast, lunch, dinner, mealSupportPay } = mealSupport;

  return (
    <MainDiv>
      {[
        breakfast,
        lunch,
        dinner,
        mealSupportPay,
        dormitorySupport,
        selfDevelopmentPay,
        equipmentSupport,
        youthTomorrowChaeumDeduction,
        alternativeMilitaryPlan,
        elseSupport,
      ] ? (
        <>
          <Box>
            {[
              `${breakfast ? "아침제공" : ""}`,
              `${lunch ? "점심제공" : ""}`,
              `${dinner ? "저녁제공" : ""}`,
              `${mealSupportPay > 0 ? `식비지원 : ${mealSupportPay}원` : ""}`,
              `${dormitorySupport ? "기숙사 지원" : ""}`,
              `${selfDevelopmentPay ? "자기계발비 지원" : ""}`,
              `${equipmentSupport ? "장비 지원" : ""}`,
              `${youthTomorrowChaeumDeduction ? "청년내일채움공제" : ""}`,
              `${alternativeMilitaryPlan ? "산업기능요원" : ""}`,
            ].map((e, i, a) => (
              <>{e !== "" ? <div>{e}</div> : ""}</>
            ))}
          </Box>
          <div>{elseSupport ? `기타: ` + elseSupport : ""}</div>
        </>
      ) : (
        <>복리후생이 없습니다.</>
      )}
    </MainDiv>
  );
};
export default DetailPageBenefit;
const MainDiv = styled.div`
  margin-top: 30px;
  > div {
    margin-top: 15px;
  }
`;

const Box = styled.span`
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;

  > div {
    display: flex;
    width: max-content;
    padding: 15px 25px;
    margin-right: 10px;
    border-radius: 10px;
    color: #6750f8;
    background-color: rgba(103, 80, 248, 0.1);
    font-size: 20px;
  }
  + div {
    color: rgba(16, 17, 18, 0.5);
    margin-top: 30px;
    font-size: 14px;
  }
`;
