import styled from "styled-components";

const Statistics = () => {
  return (
    <MainDiv>
      <div>
        <div>전체 취업률</div>
        <hr />
        <span>25.00%</span>
      </div>
      <div>
        <div>전체 통계</div>
        <hr />
        <span>20/80명</span>
      </div>
    </MainDiv>
  );
};
export default Statistics;
const MainDiv = styled.div`
  width: 100%;
  display: inline-flex;
  margin-top: 3vmin;
  height: 11.68vmin;
  overflow-y: hidden;
  font-size: 0.95vmax;
  > div {
    width: 50%;
    height: 100%;
    border-top: 2px solid #6750f8;
    border-right: 2px solid #6750f8;
    padding: 2vmin;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    > hr {
      width: 3vmax;
      border: none;
      height: 2px;
      background-color: #6750f8;
    }

    + div {
      border-right: none;
    }
  }
`;
