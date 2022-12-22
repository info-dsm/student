import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import {
  Hydrate,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "ui";
import React, { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}></ThemeProvider>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}
