import { IonApp } from "@ionic/react";
import Icon1x from "../../components/icons/1x";
import AccStyle from './Account.module.css'
const SignUp: React.FC = () => {
  return (
    <div className={AccStyle.SignUpPage}>
      <form className={AccStyle.SignUpForm}>
        <Icon1x />
        <h1 className={AccStyle.title}>학생 회원가입</h1>
        <p>이메일</p>
        <label>
          <input className={AccStyle.email} required type={"email"} placeholder="이메일을 입력해주세요" />
          <button>인증번호 발송</button>
        </label>
        <label>
          <input className={AccStyle.email}  type={"text"} placeholder="인증번호를 입력해주세요." disabled />
          <button disabled>인증번호 확인</button>
        </label>
        <p>비밀번호</p>
        <input type={"password"} placeholder="비밀번호를 입력해주세요" />
        <input type={"password"} placeholder="비밀번호를 재입력 입력해주세요" />
        <p>깃허브 주소</p>
        <input type={"password"} placeholder="깃허브 주소를 입력해주세요" />
        <input type={"submit"} value="회원가입" className={AccStyle.SubmitBtn} />
        <div className={AccStyle.Accountfooter}>
          기존 회원이신가요?&nbsp;
          <a href="/account/login">로그인</a>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
