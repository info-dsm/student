import NoticeDetailClassification from "../../Classification";
import PositionImg from "@/public/assets/images/position.png";
import CompanyImg from "@/public/assets/images/company.png";
import Image from "next/image";
import { getCompanyDetailProps } from "@/src/axios/dist";
import styled from "styled-components";
import { useEffect, useState } from "react";

const CompanyDetailPosition = ({
  companyInfo,
}: {
  companyInfo: getCompanyDetailProps;
}) => {
  const positionInfo = [
    {
      image: CompanyImg,
      content: companyInfo.companyName + ` (${companyInfo.companyNumber})`,
    },
    {
      image: PositionImg,
      content: companyInfo.companyInformation.homeAddress?.fullAddress,
    },
  ];
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const { kakao }: any = window;
    if (kakao) {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(pos.y, pos.x),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      var geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        `${companyInfo.companyInformation.homeAddress?.fullAddress}`,
        function (result: any, status: any) {
          if (status === kakao.maps.services.Status.OK) {
            setPos({ x: result[0].x, y: result[0].y });
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });
            var infowindow = new kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;color:#f6f6f6;border:none;background-color:#6750f8;border-radius:8px;">${companyInfo.companyName}</div>`,
            });
            infowindow.open(map, marker);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        }
      );
    }
  }, []);

  return (
    <Position>
      <NoticeDetailClassification name={"근무지 위치"} />
      <h4>
        <span>
          <div>
            {positionInfo.map((e) => (
              <div>
                <Image src={e.image} alt="position" width={10} height={10} />
                {e.content}
              </div>
            ))}
          </div>
          <div id="map"></div>
        </span>
        <div>
          <a
            href={`https://map.kakao.com/?rt=%2C%2C523953%2C1084098&rt1=대덕소프트웨어+마이스터고등학교&rt2=${companyInfo.companyInformation.homeAddress?.fullAddress}`}
          >
            지도로 보기 <span>{">"}</span>
          </a>
        </div>
        <div>
          <a href={`https://map.kakao.com/link/roadview/${pos.y},${pos.x}`}>
            로드뷰로 보기 <span>{">"}</span>
          </a>
        </div>
      </h4>
    </Position>
  );
};
export default CompanyDetailPosition;

const Position = styled.div`
  margin: 30px 0;

  #map {
    > div > div > div > div {
      border-radius: 8px;
      > img {
        content: url("https://cdn.discordapp.com/attachments/1071077149605384262/1121231084710006944/image.png");
      }
    }
  }

  > h4 {
    margin-top: 22px;
    font-size: 18px;
    font-weight: 500;
    padding-left: 20px;
    color: rgba(16, 17, 18, 0.5);
    > span {
      display: inline-flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      > div:nth-child(1) {
        width: 50%;
        > div {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-bottom: 15px;
          > img {
            width: 24px;
            height: 24px;
            object-fit: contain;
          }
        }
      }
      > div:nth-child(2) {
        width: 50%;
        height: 250px;
      }
    }
    > div > a {
      text-decoration: underline;
      font-size: 18px;
      color: #ababab;
      > span {
        font-family: "Corben", cursive;
      }
    }
  }
`;
