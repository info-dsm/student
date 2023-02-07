import DownPolygonIcon from "../images/DownPolygoIcon";
import styled from "styled-components";
export interface TitleProps {
  checked: boolean;
  data: { title: string; width: number; key: string }[];
  onChange: () => void;
}
export const Title = ({ data, ...props }: TitleProps) => {
  return (
    <>
      <_Layout>
        <_CheckBox type={"checkbox"} {...props} />
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
export const _Layout = styled.div`
  width: 60rem;
  height: 2rem;
  border-bottom: 0.05rem solid ${(props) => props.theme.colors.gray};
  display: flex;
  gap: 0.5rem;
`;
export const _CheckBox = styled.input`
  margin-top: 0.5rem;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  border: 0.05rem solid ${(props) => props.theme.colors.black};
`;
const _TitleLayout = styled.div<{ width: number }>`
  width: ${(props) => props.width}rem;
  font: 700 0.7rem "Pretendadard";
  line-height: 2rem;
`;
export const Wait = () => <_Layout />;
