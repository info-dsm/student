import styled from "styled-components";

const ClassInfo = () => {
  return (
    <ClassInfoDiv>
      <h1>임베디드소프트웨어과</h1>
      <p>
        SW 및 HW에 대한 기본적인 이해를 바탕으로 임베디드 SW 구현을 위한
        펌웨어/OS 시스템/플랫폼/응용 SW의 개발, 시험, 유지보수를 수행할 수 있는
        임베디드SW 개발자 양성을 목표로 한다.
      </p>
      <div>
        <div>
          <span>취업률</span>
          <span>25.00%</span>
        </div>
        <VerticalLine />
        <div>
          <span>취업률</span>
          <span>25.00%</span>
        </div>
        <VerticalLine />
        <div>
          <span>취업률</span>
          <span>25.00%</span>
        </div>
      </div>
    </ClassInfoDiv>
  );
};
export default ClassInfo;

const VerticalLine = styled.div`
  height: 54px;
  border-radius: 5px;
  border-left: 1.5px solid #cdcdcd;
`;

const ClassInfoDiv = styled.div`
  width: 470px;
  text-align: center;
  white-space: pre-line;
  > h1 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 40px;
  }
  > p {
    font-size: 18px;
    color: #000000a5;
    margin-bottom: 56px;
  }
  > div {
    display: inline-flex;
    gap: 38px;
    margin-bottom: 130px;
    > div {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      > span:nth-child(1) {
        color: #6750f8;
      }
      > span:nth-child(2) {
        font-weight: 600;
      }
    }
  }
`;
