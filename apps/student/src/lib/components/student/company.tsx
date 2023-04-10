import { getCompanyList1ContentProps } from "../../../axios/dist";
import styled from "styled-components";
import Checked2 from "../../../../public/assets/images/checked2";
import { useRouter } from "next/router";

const StudentCompany = ({ info }: { info: getCompanyList1ContentProps }) => {
  const router = useRouter();
  return (
    <NoticeDiv
      onClick={() => {
        router.push(`/company/detail/${info.companyNumber}`);
      }}
    >
      <img src={info.companyIntroductionResponse.companyLogo.fileUrl} alt="" />
      <h1>{info.companyName}</h1>
      <span>{info.companyIntroductionResponse.introduction}</span>
      <br />
      <div>
        {info.isLeading ? (
          <div>
            <Checked2 />
            <span>선도기업</span>
          </div>
        ) : (
          <></>
        )}
        {info.isAssociated ? (
          <div>
            <Checked2 />
            <span>협력기업</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </NoticeDiv>
  );
};

export default StudentCompany;

const NoticeDiv = styled.a`
  text-decoration: none;
  padding: 30px;
  min-height: 280px;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 30px;

  * {
    color: #101112;
  }
  cursor: pointer;
  width: 18.3vmax;
  border-radius: 10px;

  img {
    width: 100%;
    height: 18vmin;
    margin-bottom: 17px;
    object-fit: contain;
  }
  font-weight: 600;
  > h1 {
    margin: 0;
    font-size: 1vmax;
  }
  > div {
    margin-top: 18px;
    display: flex;
    font-size: 0.67vmax;
    gap: 20px;
    > div {
      display: flex;
      gap: 4px;
    }
  }
  > span {
    font-size: 0.72vmax;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
  }
`;
