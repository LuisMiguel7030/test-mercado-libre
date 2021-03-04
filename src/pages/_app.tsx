// vendors
import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
// styles
import { GlobalStyle, theme } from '@mercado-libre/commons';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
