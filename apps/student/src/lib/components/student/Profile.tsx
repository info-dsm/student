import { getUserInfoProps } from "../../../axios/dist";
import Image from "next/image";
import styled from "styled-components";
import GithubIcon from "../../../../public/assets/images/github.png";
import UserIcon from "../../../../public/assets/images/user.png";

const StudentMyPageProfile = ({ info }: { info: getUserInfoProps }) => {
  return (
    <Profile>
      <ProfileImage>
        <Image
          src={
            info.profilePhotoLink
              ? info.profilePhotoLink
              : "https://cdn.discordapp.com/attachments/1071077149605384262/1103215142952513546/user.png"
          }
          alt="프로필 사진"
          width={140}
          height={140}
          object-fit={"cover"}
        />
      </ProfileImage>
      <div>
        <div>{info.name}</div>
        {/* <div>info 재직중</div> */}
        <div>{info.email}</div>
        {/* <Image src={GithubIcon} alt="" width={38} height={38} /> */}
      </div>
    </Profile>
  );
};

export default StudentMyPageProfile;

const Profile = styled.div`
  width: 100%;
  height: 25.93vmin;
  box-shadow: 2px 2px 12px -1px rgba(0, 0, 0, 0.22);
  display: inline-flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  gap: 36px;
`;

const ProfileImage = styled.div`
  img {
    width: 7.29vmax;
    height: 7.29vmax;
    border-radius: 50%;
    object-fit: cover;
    object-position: bottom;
  }
  border-radius: 50%;
  + div {
    div:nth-child(1) {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    div:nth-child(2),
    div:nth-child(3) {
      font-weight: 500;
      font-size: 15px;
    }
    div:nth-child(2) {
      margin-bottom: 12px;
    }
    div:nth-child(3) {
      margin-bottom: 8px;
    }
  }
`;
