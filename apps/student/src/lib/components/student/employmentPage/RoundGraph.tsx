import styled, { keyframes } from "styled-components";

const RoundGraph = ({ rate }: { rate: number }) => {
  return (
    <RoundGraphDiv>
      <span>
      <h1>25%</h1>
        <svg viewBox="0 0 80 80">
          <path
            stroke-dasharray="100, 100"
            d="M20 4
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        <svg viewBox="0 0 80 80">
          <path
            id="graph"
            stroke-dasharray={`${rate.toFixed(2)}, 100`}
            d="M20 4
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </span>
      <div>
        <div /> <div>취업완료</div>
      </div>
      <div>
        <div /> <div>취업 전</div>
      </div>
    </RoundGraphDiv>
  );
};
export default RoundGraph;

const GraphAnimation = keyframes`
  0% {
    stroke-dasharray: 0 100;
  }
`;

const RoundGraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  margin-top: 1.6vmin;
  height: 9.5vmax;

  > div {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 1.1vmin;
    + div {
      > div:nth-child(1) {
        background-color: #e1dcfe;
      }
    }
    > div:nth-child(1) {
      width: 0.8vmax;
      height: 0.8vmax;
      background-color: #6750f8;
      border-radius: 50%;
    }
    > div:nth-child(2) {
      width: 4.2vmax;
      font-size: 0.9vmax;
    }
  }

  > span {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1.6vmax;
    h1 {
      margin: 0;
      display: flex;
      font-size: 1.2vmax;
    }
  }
  svg {
    position: absolute;
    top: 0;
    display: block;
    width: 8vmax;
    height: 8vmax;
  }
  path {
    stroke: #e1dcfe;
    fill: none;
    stroke-width: 7;
    transform: scale(2, 2);
    transition: 1s;
  }

  #graph {
    stroke: #6750f8;
    animation: ${GraphAnimation} 1s ease-in-out;
  }
`;
