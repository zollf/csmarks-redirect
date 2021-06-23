import '@/styles/main.css';

import Head from 'next/head';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';

interface Props {
  Component: any;
  pageProps: any;
}

const App = ({ Component, pageProps }: Props) => {
  return (
    <HelmetProvider>
      <Head>
        <title>csmarks</title>
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </HelmetProvider>
  );
};

export default App;
