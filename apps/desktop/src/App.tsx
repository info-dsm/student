import React from "react";
import MainRouter from "./routes/router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "ui";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
