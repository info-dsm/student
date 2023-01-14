import MouBanner from "../../components/banners/MouBanner";
import Header from "../../components/Header";
import RecruitmentBanner from "../../components/banners/RecruitmentBanner";
import SearchBar from '../../components/searchBar/SearchBar';
import CardCompany from "../../components/card/CardCompany";

const tag = [{ name: "선도기업" }, { name: "MOU 체결" }]

const Company: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="contentBody">
        <MouBanner />
        <RecruitmentBanner />
        <SearchBar url="/company" placeholder="검색어를 입력해주세요. (예. 회사, 직군, 경력 등)" />
        <CardCompany title="(주)순양물산" desc="운송업을 주 사업으로 활동하는 회사 입니다." image="" tag={tag} />
      </div>
    </div>
  )
}

export default Company;
