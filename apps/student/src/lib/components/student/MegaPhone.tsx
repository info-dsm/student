import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import megaphoneImg from "@/public/assets/images/megaphone.png";
import Image from "next/image";
import { AnnouncementLatest } from "@/src/axios/dist";
import { useRouter } from "next/router";

const MegaPhone = () => {
  const [announce, setAnnounce] = useState("");
  const router = useRouter();

  useEffect(() => {
    AnnouncementLatest().then((res) => {
      setAnnounce(res.title);
    });
  }, []);

  return (
    <>
      <MainDiv>
        <div>
          <Image
            src={megaphoneImg}
            alt=""
            onClick={() => router.push("../announcement")}
          />
          {announce !== "" ? (
            <span onClick={() => router.push("../announcement")}>
              {announce}
            </span>
          ) : (
            <></>
          )}
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
    cursor: pointer;
    background-color: rgba(255, 142, 142, 0.3);
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 40px;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
`;
