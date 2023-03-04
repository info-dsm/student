import styled from "styled-components";
import DiscordIcon from "../images/Discord";
import GithubIcon from "../images/Github";

export const Footer = () => {
  return (
    <>
      <_BackGround>
        <_OutFlex>
          <_Flex>
            <_Box key={"front_end"}>
              <_OutLayout>
                <div>
                  <span>개발자</span>
                </div>
                <div>Front_End</div>
              </_OutLayout>
              <_FlexProps>
                <div>김진건</div>
                <div>이동현</div>
                <div>최태혁</div>
              </_FlexProps>
            </_Box>
            <_Box key={"back_end"}>
              <_OutLayout>
                <div>
                  <span>개발자</span>
                </div>
                <div>Back_End</div>
              </_OutLayout>
              <_FlexProps>
                <div>안진우</div>
              </_FlexProps>
            </_Box>
            <_Box key={"design"}>
              <_OutLayout>
                <div>
                  <span>디자인</span>
                </div>
                <div>Designer</div>
              </_OutLayout>
              <_FlexProps>
                <div>김진건</div>
                <div>안진형</div>
                <div>임수빈</div>
              </_FlexProps>
            </_Box>
          </_Flex>
          <_FlexIcon>
            <div key={"Github"}>
              <GithubIcon />
            </div>
            <div key={"Discord"}>
              <DiscordIcon />
            </div>
          </_FlexIcon>
        </_OutFlex>
        <_Layout>
          <_Title>Contact</_Title>
          <_FlexSc>
            <div>
              <span>산학협력부 연락처: 000-0000-0000</span>
            </div>
            <div>
              <span>산학협력부 email: 0000@dsm.hs.kr</span>
            </div>
            <div>
              <span>문의: support@info-dsm.info</span>
            </div>
          </_FlexSc>
        </_Layout>
      </_BackGround>
    </>
  );
};
const _BackGround = styled.div`
  background-color: #26282b;
  width: 100vw;
  height: 300px;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
`;
const _Box = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const _FlexProps = styled.div`
  display: flex;
  gap: 30px;
  div {
    font: 500 14px "Pretendard";
    color: ${({ theme }) => theme.colors.white};
  }
`;
const _FlexSc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font: 500 14px "Pretendard";
    color: ${({ theme }) => theme.colors.white};
  }
`;
const _Title = styled.div`
  font: 600 16px "Pretendard";
  color: ${({ theme }) => theme.colors.white};
`;
const _FlexIcon = styled.div`
  display: flex;
  gap: 25px;
`;
const _Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px 0 90px 0;
  width: 400px;
`;
const _OutLayout = styled.div`
  width: 200px;
  gap: 2px;
  color: ${({ theme }) => theme.colors.white};
  span {
    font: 600 13px "Pretendard";
  }
  :last-child {
    font: 600 16px "Pretendard";
  }
  display: flex;
  flex-direction: column;
`;
const _Flex = styled.div`
  display: flex;
  gap: 20px;
`;
const _OutFlex = styled.div`
  padding: 60px 0 90px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
