import Icon1x from "../icons/1x";
import LoadingStyle from "./Loading.module.css"

const Load: React.FC = () =>{
  return (
    <div className={LoadingStyle.body}>
      <div className={LoadingStyle.iconCenter}>
        <Icon1x />
      </div>
    </div>
  )
}

export default Load;
