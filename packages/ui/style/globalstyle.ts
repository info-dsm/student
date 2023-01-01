import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body {
    user-select:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    overflow-x: hidden;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.admin.silver};
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
  }
  * {
    outline: none;
    box-sizing: border-box;
  }
`;
