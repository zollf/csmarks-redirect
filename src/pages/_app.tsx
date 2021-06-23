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
        <meta
          name="description"
          content="University of Western Australia, csse csmarks page redirect button. Since the homepage doesn't exists, this what we all use instead."
        />
        <meta
          name="keywords"
          content="csmarks, uwa csmarks, csse csmarks, University of Western Australia, csse, uwa, uws cs, computer science, cits, csse marks"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <header>
        <nav>
          <a rel="noopener noreferrer" target="_blank" href="https://secure.csse.uwa.edu.au/run/csmarks">
            csmarks
          </a>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/zollf/csmarks-redirect">
          Github
        </a>
      </footer>
    </HelmetProvider>
  );
};

export default App;
