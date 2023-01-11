import bannerStyle from './banner.module.css'

const RecruitmentBanner: React.FC = () => {
  return (
    <div className={bannerStyle.RecruitmentBackground}>
      <div>
        <h1>현재 총 100,000개의 모집공고가 있어요</h1>
        <p>DSM의 회사 모집 공고를 둘러보세요! - 2022.12.30 기준</p>
      </div>
      <img alt='RecruitmentBanner' src="/assets/banners/RecruitmentBanner.png" />
    </div>
  )
}

export default RecruitmentBanner;