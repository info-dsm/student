import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body {
    user-select:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    overflow-x: hidden;
    scroll-behavior: smooth;
    margin: 0;
    background-color: #F8F8F9;
    ::-webkit-scrollbar {
      background-color: ${(props) => props.theme.colors.gray};
      width: 10px; 
    }
    ::-webkit-scrollbar-thumb {
      background-color: #6141cc;
      border-radius: 3px;
      width: 10px;
    }
  }
  html {  
    font-size: 20px;
    scroll-behavior: smooth;
    @media (max-width: 1000px) {
      font-size: 12px;
    }
  }
  * {
    outline: none;
    box-sizing: border-box;
  }

  @keyframes MoveNotice {
  0% {
    transform: translateX(150%);
  }
  25%,
  75% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(150%);
  }
}

.NoticeMainDiv {
  position: relative;
  position: fixed;
  width: 450px;
  height: 64px;
  right: 20px;
  z-index: 99;
  top: 20px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;

  background-origin: border-box;
  background-clip: content-box, border-box;
  display: inline-flex;
  align-items: center;
  animation: MoveNotice 3.9s ease-in-out forwards;

  background-image: linear-gradient(#fff, #fff),
    linear-gradient(#5c5d58 0%, #5c5d58 100%);
}

.NoticeMainDiv > span {
  background-image: linear-gradient(#5c5d58 0%, #5c5d58 100%);
}

.NoticeSuccessMain {
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #52d752 0%, #52d752 100%);
}
.NoticeSuccessMain > span {
  background-image: linear-gradient(to right, #52d752 0%, #52d752 100%);
}

.NoticeErrorMain {
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #ee2020 0%, #ee2020 100%);
}
.NoticeErrorMain > span {
  background-image: linear-gradient(to right, #ee2020 0%, #ee2020 100%);
}

.NoticeLogo {
  width: 50px;
  border-radius: 50%;
  height: 50px;
  margin-right: 10px;
  margin-left: 6px;
  border: 5px solid transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  align-items: center;

  >div {
    margin-left: 10px;
  }
}

.NoticeIcon {
  width: 20px;
  height: 20px;
  background-color: #fff;
  margin-left: 8px;
  clip-path: polygon(
    30% 8%,
    9% 28%,
    30% 50%,
    9% 72%,
    28% 92%,
    50% 70%,
    72% 91%,
    91% 72%,
    70% 50%,
    91% 28%,
    70% 8%,
    50% 30%
  );
}

.NoticeSuccessIcon {
  clip-path: polygon(36% 60%, 83% 9%, 100% 26%, 36% 89%, 0 57%, 14% 41%);
}

.NoticeMessage {
  font-size: 16px;
  font-weight: 400;
  margin-left: -6px;
  margin-bottom: 5px;
}

@keyframes Count {
  0% {
    width: 380px;
  }
  100% {
    width: 0px;
  }
}

.NoticeBar {
  width: 380px;
  height: 5px;
  position: absolute;
  bottom: 5px;
  left: 56px;
  border-radius: 0 4px 4px 0;
  animation: Count 2s ease-out forwards;
  animation-delay: 0.9s;
  background-color: #5c5d58;
}

.NoticeSuccessBar {
  background-color: #52d752;
}

.NoticeErrorBar {
  background-color: #ee2020;
}

`;
