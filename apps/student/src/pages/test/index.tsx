import Script from "next/script";
import { Map } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0a33698fbb4cbdc35a7a5e659299d3ee&autoload=false`;

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "300px", height: "300px" }}
      ></Map>
    </>
  );
};

export default KakaoMap;
