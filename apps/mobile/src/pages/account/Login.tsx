import { IonApp, IonContent } from "@ionic/react";
import AccStyle from './Account.module.css'
import Icon1x from "../../components/icons/1x";
import Icon2x from "../../components/icons/2x";
import cn from "classnames";
import { useState } from "react";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const loginSubmit = (e: any) => {
    axios(String(process.env.REACT_APP_BASE) + "/auth/login/user", {
      method: "POST",
      data: JSON.stringify({
        email,
        password
      })
    })
    .then((res) => {
      if (res.status === 201) {
        // Success
      }
      else if (res.status === 400) {
        // 비밀번호 불일치
      }
      else if (res.status === 404) {
        // 유저를 찾을 수 없음
      }
    }).catch(() => {
      // url, server, axios Error?
    })
  }

  return (
    <IonApp className={AccStyle.LoginPage}>
      <div className={cn(AccStyle.MarginLRAuto, AccStyle.AuthMarginTB)}>
        <Icon2x/>
      </div>
      <div className={AccStyle.auth}>
        <Icon1x />
        <h1>학생 로그인</h1>
        <form className={AccStyle.LoginForm} onSubmit={loginSubmit}>
          <p>이메일</p>
          <input type={"text"} required placeholder={"이메일을 입력해주세요"} onChange={(e) => setEmail(e.target.value)} />
          <p>비밀번호</p>
          <input type={"password"} required placeholder={"비밀번호를 입력해주세요"} onChange={(e) => setPassword(e.target.value)} />
          <input type={"submit"} className={AccStyle.SubmitBtn} value={"로그인"} />
          <div className={AccStyle.Accountfooter}>
            비밀번호를 잊어버리셨나요? &nbsp;
            <a>비밀번호 찾기</a>
          </div>
          <div className={AccStyle.Accountfooter}>
            info가 처음이신가요? &nbsp;
            <a>회원가입</a>
          </div>
        </form>
      </div>
    </IonApp>
  )
}

export default Login;
