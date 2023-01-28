import { NoticeCardProps } from "../../types/interfaces"
import CardStyle from './card.module.css'
import cn from "classnames"
import IconGray from "../icons/card"

const CardNotice: React.FC<NoticeCardProps> = ({ title, tags, company, image, address }) => {
  return (
    <div className={CardStyle.body}>
      {!image ? 
        <div className={cn(CardStyle.image, CardStyle.NotImage)}>
          <IconGray />
        </div>
      :
        <img className={CardStyle.image} src={image} />
      }
      <div className={CardStyle.NoticeContent}>
        <h1>{title}</h1>
        <div className={CardStyle.NoticeDesc}>
          <p><b>기업</b> &nbsp; {company}</p>
          <p><b>주소</b> &nbsp; {address}</p>
        </div>
        <ul>
          {tags.map((tag: {name:string}) => (
            <li>
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CardNotice;
