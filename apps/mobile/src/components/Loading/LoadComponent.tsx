import { IonApp } from "@ionic/react";
import Icon1x from "../../../components/icons/1x";
import LoadingStyle from "./Loading.module.css"

const Load: React.FC = () =>{
  return (
    <IonApp className={LoadingStyle.body}>
      <div className={LoadingStyle.iconCenter}>
        <Icon1x />
      </div>
    </IonApp>
  )
}

export default Load;
