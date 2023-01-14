import styled from "styled-components";
import DownPolygonIcon from "../images/DownPolygoIcon";
export interface TitleProps {
  checked: boolean;
  data: { title: string; width: number; key: string }[];
  onClick: () => void;
}
export interface ListProps {
  index: number;
  checked: boolean;
  onClick: (index: number) => void;
}
const _Layout = styled.div`
  width: 60rem;
  height: 2rem;
  margin: 0 auto;
  border-bottom: 0.05rem solid ${(props) => props.theme.colors.gray};
  display: flex;
`;
export const Title = ({ checked, data, onClick }: TitleProps) => {
  return (
    <>
      <_Layout>
        <_CheckBox type={"checkbox"} />
        {data.map((item: { title: string; width: number; key: string }) => (
          <>
            <_TitleLayout width={item.width} key={item.key}>
              {item.title}
              <DownPolygonIcon />
            </_TitleLayout>
          </>
        ))}
      </_Layout>
    </>
  );
};
const _CheckBox = styled.input`
  margin-top: 0.5rem;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  border: 0.05rem solid ${(props) => props.theme.colors.black};
`;
const _TitleLayout = styled.div<{ width: number }>`
  width: ${(props) => props.width}rem;
  font: 700 0.7rem "Pretend";
  line-height: 2rem;
`;

export const List = () => {
  return (
    <>
      <_Layout></_Layout>
    </>
  );
};
