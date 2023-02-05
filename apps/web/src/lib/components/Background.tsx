import styled from "styled-components";
import { Header, Logo } from "ui";
import React from "react";
import { BackImg } from "../../../public/assets";
import Image from "next/image";
const Background = (props: {
  menu: {
    onClick: () => void;
    key: string;
    selected: boolean;
  }[];
}) => {
  return (
    <>
      <Image src={BackImg} alt="" placeholder="blur" fill></Image>
      <_Layout>
        <Header bgColor="rgba(16, 17, 18, 0.5);" admin={false} {...props}>
          <Logo main={false} onClick={() => {}} />
        </Header>
      </_Layout>
    </>
  );
};
export default Background;
const _Layout = styled.div`
  position: absolute;
`;