import { IonApp } from "@ionic/react";
import etcStyle from "./etc.module.css"
const NotFound: React.FC = () => {
  return (
    <IonApp className={etcStyle.NotFound}>
      <div>
        <h1>404</h1>
        <p>PAGE NOT FOUND</p>
      </div>
      
      <button className={etcStyle.Back}>
        Go Back Home
      </button>
    </IonApp>
  )
}

export default NotFound;
