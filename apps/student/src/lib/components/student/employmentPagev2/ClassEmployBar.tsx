import { classArray } from "@/public/data";
import { getEmploymentTotalClassProps } from "@/src/axios/dist";
import styled, { keyframes } from "styled-components";

const ClassEmployBar = ({
  select,
  classInfo,
}: {
  select: {
    state: number;
    setState: (value: number) => void;
  };
  classInfo: getEmploymentTotalClassProps;
}) => {
  return (
    <MainDiv>
      <h1>취업현황</h1>
      <Content>
        {classArray.map((e, i) => (
          <div>
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
          </div>
        ))}
      </Content>
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

const Content = styled.div`
  width: 100%;
  height: 78%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1.5vmin;
  > div {
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
