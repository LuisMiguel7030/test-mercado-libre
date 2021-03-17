// vendors
import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
// commons
import { GlobalStyle, theme, Header } from '@mercado-libre/commons';
// components
import PageLayout from '../components/PageLayout/PageLayout';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
