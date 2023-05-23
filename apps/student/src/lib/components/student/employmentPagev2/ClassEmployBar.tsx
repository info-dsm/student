import { classArray } from "@/public/data";
import { getEmploymentTotalClassProps } from "@/src/axios/dist";
import styled, { keyframes } from "styled-components";

const ClassEmployBar = ({
  select,
  classInfo,
  delay,
}: {
  select: {
    state: number;
    setState: (value: number) => void;
  };
  classInfo: getEmploymentTotalClassProps;
  delay: {
    setState: (value: number | null) => void;
  };
}) => {
  return (
    <MainDiv>
      <h1>취업현황</h1>
      <Container>
        {classArray.map((e, i) => (
          <Content
            select={select.state === i}
            onClick={() => {
              select.setState(i);
              delay.setState(null);
            }}
          >
            <span>{e}</span>
            <div>
              <Bar
                width={
                  (classInfo.classList[i].totalEmployedClassStudent /
                    classInfo.classList[i].totalClassStudent) *
                  100
                }
              />
            </div>
          </Content>
        ))}
        <Dot topPos={select.state * 27.5 + 4.5} />
      </Container>
    </MainDiv>
  );
};
export default ClassEmployBar;

const MainDiv = styled.div`
  width: 100%;
  height: 65%;
  padding: 5px 30px;
  > h1 {
    font-size: 1.1vmax;
  }
`;

const Dot = styled.div<{ topPos: number }>`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #6750f8;
  /* top: ${(props) => props.topPos}vmin; */
  top: ${(props) => props.topPos}%;
  transition: 0.3s ease-out;
  left: -7px;
`;

const Container = styled.div`
  width: 100%;
  height: 78%;
  padding-left: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1.5vmin;
  > div {
    cursor: pointer;
    > div {
      margin-top: 2px;
      width: 100%;
      height: 1.5vmin;
      background-color: #e5e5e5;
      border-radius: 12px;
      position: relative;
    }
    > span {
      font-size: 0.8vmax;
    }
  }
`;

const Content = styled.div<{ select: boolean }>`
  > span {
    color: ${(props) => (props.select ? "#6750f8" : "#101112")};
    font-weight: ${(props) => (props.select ? 700 : 400)};
  }
`;

const BarAnimation = (width: number) => keyframes`
    0% {
        width: 0;
    }
    100% {
        width: ${width}%;
    }
`;

const Bar = styled.div<{ width: number }>`
  border-radius: 12px;
  position: absolute;
  height: 100%;
  background-color: #6750f8;
  width: 0;
  animation: ${(props) => BarAnimation(props.width)} 1s ease-in-out forwards;
`;
