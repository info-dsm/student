import { IonApp, IonContent } from "@ionic/react";
import AccStyle from './Account.module.css'
import Icon1x from "../../components/icons/1x";
import Icon2x from "../../components/icons/2x";
import cn from "classnames";
const Login: React.FC = () => {
  return (
    <IonApp className={AccStyle.Account}>
      <div className={cn(AccStyle.MarginLRAuto, AccStyle.AuthMarginTB)}>
        <Icon2x/>
      </div>
      <div className={AccStyle.auth}>
        <Icon1x />
        <h1>학생 로그인</h1>
        <form className={AccStyle.LoginForm}>
          <p>이메일</p>
          <input type={"text"} placeholder={"이메일을 입력해주세요"} />
          <p>비밀번호</p>
          <input type={"password"} placeholder={"비밀번호를 입력해주세요"} />
          <input type={"submit"} className={AccStyle.LoginButton} value={"로그인"} />
          <div>
            비밀번호를 잊어버리셨나요? &nbsp;
            <a>비밀번호 찾기</a>
          </div>
          <div>
            info가 처음이신가요? &nbsp;
            <a>회원가입</a>
          </div>
        </form>
      </div>
    </IonApp>
  )
}

export default Login;
