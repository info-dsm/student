import styled, { keyframes } from "styled-components";

const RoundGraph = ({ rate }: { rate: number }) => {
  return (
    <RoundGraphDiv>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.6vmax 21.34vmin;

  > div {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    + div {
      > div:nth-child(1) {
        background-color: #e1dcfe;
      }
    }
    > div:nth-child(1) {
      width: 20px;
      height: 20px;
      background-color: #6750f8;
      border-radius: 50%;
    }
    > div:nth-child(2) {
      font-size: 1.1vmax;
    }
  }

  svg {
    position: absolute;
    top: 2.68vmin;
    left: 18.75vmax;
    display: block;
    width: 20.83vmax;
    height: 20.83vmax;
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
