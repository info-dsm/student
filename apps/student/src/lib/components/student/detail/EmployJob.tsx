import styled from "styled-components";

const EmployDict = ({
  data,
  width,
}: {
  width: number;
  data: {
    key: string;
    value: string;
  }[];
}) => {
  return (
    <MainDiv width={width}>
      {data.map((e) => (
        <div>
          <span>{e.key}</span>
          <div>{e.value ?? ""}</div>
        </div>
      ))}
    </MainDiv>
  );
};
export default EmployDict;

const MainDiv = styled.div<{ width: number }>`
  > div {
    margin-top: 5px;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    font-size: 17px;
    > div {
      width: ${(props) => props.width}%;
      color: rgba(0, 0, 0, 0.65);
      font-weight: 300;
      font-size: 15px;
    }
    > span {
      font-weight: 500;
    }
  }
`;
