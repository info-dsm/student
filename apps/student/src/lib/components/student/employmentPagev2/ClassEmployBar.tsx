import { getEmploymentTotalClassProps } from "@/src/axios/dist";
import styled from "styled-components";

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
  const classArray = [
    "소프트웨어 개발1반",
    "소프트웨어 개발2반",
    "임베디드 개발과",
    "정보보안과",
  ];
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
                  classInfo.classList[i].totalEmployedClassStudent /
                  classInfo.classList[i].totalClassStudent * 100
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
  row-gap: 15px;
  > div {
    > div {
      margin-top: 2px;
      width: 100%;
      height: 14px;
      background-color: #e5e5e5;
      border-radius: 12px;
      position: relative;
    }
    > span {
      font-size: 0.8vmax;
    }
  }
`;

const Bar = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 12px;
  position: absolute;
  height: 100%;
  background-color: #6750f8;
`;
