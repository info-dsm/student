import styled from "styled-components";

const StudentCompanyKind = () => {
  return (
    <Kind>
      <div>
        <div>회사 목록</div>
        <span>마감 일자순 정렬</span>
      </div>
    </Kind>
  );
};

export default StudentCompanyKind;

const Kind = styled.div`
  padding: 0vmin 13.3vmax 3.2vmin 12.29vmax;
  width: 100vw;
  display: inline-flex;
  justify-content: space-between;
  > div {
    display: inline-flex;
    align-items: center;
    gap: 20px;
    font-weight: 600;
    font-size: 1.25vmax;
    color: #101112;
    span {
      font-weight: 400;
      font-size: 0.88vmax;
    }
    + div {
      width: 274px;
      display: inline-flex;
      justify-content: space-between;
      div {
        display: inline-flex;
        align-items: center;
        + div {
          gap: 5px;
          svg:nth-child(1) {
            transform: scale(-1, 1);
          }
        }
      }
    }
  }
`;
