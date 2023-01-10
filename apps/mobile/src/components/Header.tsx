import Icon1x from "./icons/1x";
import HeaderStyle from './component.module.css'

const Header: React.FC = () => {
  return (
    <div className={HeaderStyle.Header}>
      <Icon1x />
    </div>
  )
}

export default Header;
