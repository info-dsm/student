import React from "react";
import styled, { keyframes } from "styled-components";
import megaphoneImg from "@/public/assets/images/megaphone.png";
import Image from "next/image";

const MegaPhone = () => {
  return (
    <>
      <MainDiv>
        <div>
          <Image src={megaphoneImg} alt="" />
          <span>새로운 공지 1개 있습니다.</span>
        </div>
      </MainDiv>
    </>
  );
};

export default MegaPhone;

const MainDiv = styled.div`
  width: 100vw;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  div {
    width: 73%;
    display: inline-flex;
    align-items: flex-start;
    gap: 30px;
  }

  span {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px;
    border-radius: 5px;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;
