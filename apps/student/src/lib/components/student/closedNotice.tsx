import { getClosedNoticeListContentProps } from "../../../axios/dist";
import styled from "styled-components";

const StudentClosedNotice = ({
  info,
}: {
  info: getClosedNoticeListContentProps;
}) => {
  return (
    <a>
      <NoticeDiv>
        <NoticeLogo>
          <img src={info.company.imageList[0]} alt="" />
          <span>마감</span>
        </NoticeLogo>
        <div>
          <div>
            {info.classificationResponse.map((t, i, a) => (
              <>
                {t.name}
                {a.length - 1 !== i ? ", " : " "}
              </>
            ))}
            개발자 모집합니다.
          </div>
          <span>{info.company.companyName}</span>
        </div>
        <SubData>
          {/* <div>
            <span>경력</span>
            <span>무관</span>
          </div> */}
          <div>
            <span>학력</span>
            <span>
              {info.gradeCutLine === 0 ? "무관" : `${info.gradeCutLine}%`}
            </span>
          </div>
          {/* <div>
            <span>주소</span>
            <span>강남</span>
          </div> */}
        </SubData>
      </NoticeDiv>
    </a>
  );
};

export default StudentClosedNotice;

const SubData = styled.div`
  gap: 20px;
  display: inline-flex;
  font-size: 0.72vmax;
  font-weight: 600;
  color: rgba(16, 17, 18, 0.65);
  div {
    gap: 5px;
    display: inline-flex;
  }
`;

const NoticeDiv = styled.div`
  * {
    color: #101112;
  }

  width: 14.58vmax;
  height: 20.55vmin;
  background-color: #fff;
  border: 1px solid rgba(16, 17, 18, 0.1);
  border-radius: 5px;
  padding: 0.78vmax 1.25vmin;
`;

const NoticeLogo = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 2.66vmin;
  img {
    width: 5.2vmax;
    height: 4.2vmin;
    object-fit: cover;
    border-radius: 3px;
  }
  span {
    font-size: 0.72vmax;
    font-weight: 600;
  }

  + div {
    font-weight: 600;

    div {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1vmax;
    }
    span {
      font-size: 0.67vmax;
    }
  }
`;
