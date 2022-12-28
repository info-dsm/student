import React from "react";
import MainRouter from "./router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "ui";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainRouter />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
