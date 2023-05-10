import styled from "styled-components";
import StatusDetail from "./StatusDetail";
import { getSupportStatus, getSupportStatusProps } from "@/src/axios/dist";
import { useEffect } from "react";
import cookie from "js-cookie";
import { useState } from "react";

const MyInfoApply = () => {
  const [status, setStatus] = useState<getSupportStatusProps[]>();

  useEffect(() => {
    if (typeof window !== "undefined" && cookie.get("accessToken")) {
      getSupportStatus()
        .then((res) => {
          setStatus(res as getSupportStatusProps[]);
        })
        .catch(() => {
          setStatus([]);
        });
    }
  }, []);
  return (
    <Apply>
      <div>지원현황</div>
      {status && status.length > 0 ? (
        <ApplyDiv>
          {status.map((t, i) => (
            <StatusDetail t={t} />
          ))}
        </ApplyDiv>
      ) : (
        <Empty>지원한 이력이 없습니다..</Empty>
      )}
    </Apply>
  );
};
export default MyInfoApply;

const ApplyDiv = styled.div`
  width: 100%;
  padding: 12px;
  height: 87.25%;
  border-radius: 24px;
  background-color: #f6f6f6;
  overflow-y: scroll;

  > div {
    width: 100%;
    height: 74px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 8px;
    display: inline-flex;
    justify-content: space-between;
    padding: 24px;
    > div {
      display: inline-flex;
      align-items: center;
      gap: 15px;
    }
  }
`;

const Apply = styled.div`
  width: 37.65vmax;
  height: 35.2vmax;
  background-color: #f6f6f6;
  border-radius: 25px;
  > div:nth-child(1) {
    height: 13.75%;
    width: 100%;
    background-color: #5850b260;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: 700;
    color: #241b58;
  }
`;

const Empty = styled.div`
  height: 87.25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #241b58;
`;
