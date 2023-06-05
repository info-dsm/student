import styled from "styled-components";

const EmployProcess = ({ process }: { process: string[] }) => {
  return (
    <MainDiv>
      {process.map((e, i, a) => (
        <div>
          <Box>
            <span>{i + 1}차</span>
            <div>{e}</div>
          </Box>
          {(i + 1) % 4 !== 0 && i !== a.length - 1 ? <Hr /> : <div />}
        </div>
      ))}
    </MainDiv>
  );
};
export default EmployProcess;

const MainDiv = styled.div`
  > div {
    display: inline-flex;
    margin-bottom: 20px;
    > div:nth-child(2) {
      width: 25px;
      height: 40px;
    }
  }
`;

const Hr = styled.div`
  border-bottom: dashed 1px #6750f8;
`;

const Box = styled.div`
  padding: 0 20px;
  height: 80px;
  border: 1px solid #6750f8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 7px;
  text-align: center;
  > span {
    font-weight: 600;
  }
  > div {
    width: 90px;
    font-size: 18px;
  }
`;
