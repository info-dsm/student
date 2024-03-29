import styled, { keyframes } from "styled-components";

const NoticePlaceHolder = () => {
  return (
    <NoticeContainer>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
        <div />
      ))}
    </NoticeContainer>
  );
};

export default NoticePlaceHolder;

const NoticePlaceHolderBox = keyframes`
    0% {
        right:300%;
    }
    100% {
        right:-200%;
    }
`;

const NoticeContainer = styled.div`
  width: 59.68vmax;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding-bottom: 10%;
  grid-gap: 10px;
  margin-right: 10px;

  div {
    width: 19.3vmax;
    height: 39.72vmin;
    background-color: #ebebeb;
    position: relative;
    overflow: hidden;
    &::after {
      position: absolute;
      content: "";
      width: 0px;
      height: 100%;
      top: 0;
      box-shadow: 0px 0px 100px 100px #d9d9d9;

      animation: ${NoticePlaceHolderBox} 2s ease-in-out infinite;
    }
  }
`;
