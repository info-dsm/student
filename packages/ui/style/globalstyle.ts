import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body,html {
    user-select:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-size: 20px;
    &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.admin.silver};
    width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #6141cc;
      border-radius: 3px;
      width: 10px;
    }
  }
  * {
    outline: none;
    box-sizing: border-box;
  }
`;
