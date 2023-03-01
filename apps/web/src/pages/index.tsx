import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>info</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>없는페이지입니다.</div>
    </>
  );
}
const Asdf = styled.div`
  background-color: ${(props) => props.theme.colors.admin.blue};
  width: 100px;
  height: 1100px;
`;
