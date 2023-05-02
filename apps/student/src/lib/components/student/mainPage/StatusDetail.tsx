import {
  getNoticeDetail,
  getNoticeDetailProps,
  getSupportStatusProps,
} from "@/src/axios/dist";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const StatusDetail = ({ t }: { t: getSupportStatusProps }) => {
  const [notice, setNotice] = useState<getNoticeDetailProps>();
  useEffect(() => {
    getNoticeDetail({ id: t.notice.noticeId }).then(
      (res: getNoticeDetailProps) => {
        setNotice(res);
      }
    );
  }, []);
  return (
    <div>
      <div>
        <Status
          color={t.status === "WAITING" ? "rgba(16, 17, 18, 0.6)" : "#fff"}
          background={
            t.status === "WAITING"
              ? "#e7e7e7"
              : t.status === "APPROVE"
              ? "#6750F8"
              : "#E84045"
          }
        >
          {t.status === "WAITING"
            ? "대기중"
            : t.status === "APPROVE"
            ? "승인됨"
            : "반려됨"}
        </Status>
        <Field>
          <div>
            {notice?.classificationResponse.map((t, i, a) => (
              <>
                {t.name}
                {a.length - 1 !== i ? ", " : " "}
              </>
            ))}
          </div>
        </Field>
      </div>
      <div>채용인원 1명</div>
      <div>
        <a href={`/notice/detail/?id=${t.notice.noticeId}`}>
          <Status color={"#fff"} background={"#6750F8"}>
            모집공고 정보
          </Status>
        </a>
      </div>
    </div>
  );
};
export default StatusDetail;

const Status = styled.div<{ color: string; background: string }>`
  padding: 5px 14px;
  border-radius: 17px;
  font-size: 13px;
  font-weight: 600;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  /* cursor: pointer; */
`;

const Field = styled.div`
  width: 100px;

  div {
    font-size: 17px;
    font-size: 700;
    width: 50%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div:nth-child(2) {
    font-size: 15px;
    font-weight: 500;
  }
`;
