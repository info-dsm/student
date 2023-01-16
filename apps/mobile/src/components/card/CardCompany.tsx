import { cardProps } from "../../type/interfaces"
import CardStyle from './card.module.css'
import cn from "classnames"
import IconGray from "../icons/card"
import snippet from "../../utils/snippet"
const CardCompany: React.FC<cardProps> = ({ title, desc, tags, image }) => {
  return (
    <div className={CardStyle.body}>
      {!image ? 
        <div className={cn(CardStyle.image, CardStyle.NotImage)}>
          <IconGray />
        </div>
      :
        <img className={CardStyle.image} src={image} />
      }
      <div className={CardStyle.content}>
        <h1>{title}</h1>
        <div>
          {snippet(desc, 24)}
        </div>
        <ul>
          {Object.values(tags).map((tag: any) => (
            <li key={1}>
              <svg width="12" height="9" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "2px" }}><link type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style lang="en" type="text/css" id="dark-mode-custom-style"/><style lang="en" type="text/css" id="dark-mode-native-style"/><style lang="en" type="text/css" id="dark-mode-native-sheet"/>
                <path d="M7.35283 0.646875C7.54814 0.842188 7.54814 1.15938 7.35283 1.35469L3.35283 5.35469C3.15752 5.55 2.84033 5.55 2.64502 5.35469L0.64502 3.35469C0.449707 3.15938 0.449707 2.84219 0.64502 2.64688C0.840332 2.45156 1.15752 2.45156 1.35283 2.64688L2.99971 4.29219L6.64658 0.646875C6.84189 0.451563 7.15908 0.451563 7.35439 0.646875H7.35283Z" fill="#6750F8"/>
              </svg>
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CardCompany;
