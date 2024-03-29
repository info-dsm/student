import styled from "styled-components";
import ArrowText from "./Arrow";

const TextBox = ({
  top,
  bottom,
  title,
  subTitle,
  arrow,
}: {
  top: number;
  bottom: number;
  title: string;
  subTitle: string;
  arrow: {
    text: string;
    link: string;
  };
}) => {
  return (
    <TextDiv top={top} bottom={bottom}>
      <div>{title}</div>
      <div>{subTitle}</div>
      <ArrowText text={arrow.text} link={arrow.link} />
    </TextDiv>
  );
};

export default TextBox;

const TextDiv = styled.div<{ top: number; bottom: number }>`
  width: 62.5vmax;
  padding-top: ${(props) => props.top}px;
  padding-bottom: ${(props) => props.bottom}px;
  color: #fff;
  position: relative;
  background-color: #101112;
  div {
    font-size: 2.5vmax;
    font-weight: 700;
    line-height: 2.98vmax;
    + div {
      margin-top: 20px;
      font-size: 1.14vmax;
      font-weight: 600;
      line-height: 1.5vh;
      text-align: start;
      color: rgba(255, 255, 255, 0.58);
      white-space: pre-wrap;
    }
  }

  > span {
    margin-top: 35px;
    color: rgba(255, 255, 255, 0.58);
  }
`;
