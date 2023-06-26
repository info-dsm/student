import { classArray } from "@/public/data";
import { getEmploymentClass, getEmploymentClassProps } from "@/src/axios/dist";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const EmployGrid = () => {
  const [employData, setEmployData] = useState<getEmploymentClassProps[]>();

  useEffect(() => {
    axios
      .all(
        [0, 1, 2, 3].map((e) => {
          return getEmploymentClass({ classroom: e });
        })
      )
      .then(
        axios.spread((res1, res2, res3, res4) => {
          setEmployData([res1, res2, res3, res4]);
        })
      );
  }, []);

  return (
    <MainDiv>
      {employData?.map((e1, i1) => (
        <div>
          <h1>
            <span>{classArray[i1]}</span>
            <span>
              {e1.totalEmployedClassStudent}/{e1.totalClassStudent}명
            </span>
          </h1>
          <ImageBox height={Math.ceil(e1.employmentList.length / 4) * 22.5}>
            {e1.employmentList.map((e2, i2) => (
              <div>
                <img src={e2.company.companyLogo} alt="" />
                <div>{e2.company.companyName}</div>
              </div>
            ))}
          </ImageBox>
        </div>
      ))}
    </MainDiv>
  );
};
export default EmployGrid;

const ImageBox = styled.div<{ height: number }>`
  margin-top: 0.7vmin;
  display: grid;
  /* height: ${(props) => props.height}%; */
  height: 32vmin;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1vmin;
  > div {
    position: relative;
  }
  img {
    width: 7.3vmax;
    height: 6vmin;
    object-fit: contain;
    border-radius: 5px;
    border: none;
    padding: 1.1vmax;
    padding-top: 0.3vmax;
    box-shadow: 0 0 10px 0 #10111230;
    background-color: white;
  }
  > div > div {
    position: absolute;
    /* left: 50%;
    transform: translateX(-50%); */
    right: 5%;
    padding-right: 1vmax;
    white-space: nowrap;
    top: 4vmin;
    font-size: 0.65vmax;
    font-weight: 600;
    /* text-shadow: -0.1vmin 0 white, 0 0.1vmin white, 0.1vmin 0 white,
      0 -0.1vmin white; */
  }
`;

const MainDiv = styled.div`
  width: 75%;
  height: 100%;
  padding: 30px;
  display: grid;
  padding-top: 5.5%;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  > div {
    background-color: #f8f8f9;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0 0 15px 0 #10111240;
    padding: 20px 28px;
    > h1 {
      margin: 0;
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
      > span {
        font-size: 1.3vmax;
        + span {
          font-size: 1vmax;
          color: #1011128a;
        }
      }
    }
  }
`;
