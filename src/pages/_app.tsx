import React from 'react';
import Head from 'next/head';
import { HelmetProvider } from 'react-helmet-async';
import { HowTo } from 'schema-dts';
import { jsonLdScriptProps } from 'react-schemaorg';

import '@/styles/main.css';

interface Props {
  Component: any;
  pageProps: any;
}

const App = ({ Component, pageProps }: Props) => {
  const keywords = pageProps.keywords || '';
  const description = pageProps.description || '';
  const title = pageProps.title ? `csmarks | ${pageProps.title}` : 'csmarks';

  return (
    <HelmetProvider>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />

        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content={App.site_name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={App.url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${App.url}/favicon-32x32.png`} />
        <meta property="og:image:width" content="32" />
        <meta property="og:image:height" content="32" />
        <meta property="og:image:alt" content={description} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${App.url}/favicon-32x32.png`} />
        <meta name="twitter:image:width" content="32" />
        <meta name="twitter:image:height" content="32" />
        <meta name="twitter:image:alt" content={description} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link ref={App.url} rel="home" />
        <link ref={App.url} rel="canonical" />

        <meta name="google-site-verification" content="uNZbBEFcgmL5FiSuAiJLwhEMJDfM5QUlfOf_DqA0Irc" />

        <script
          {...jsonLdScriptProps<HowTo>({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'csmarks redirect',
            description: 'How to get to csmarks uwa, since no one can ever find the page.',
            step: [
              {
                '@type': 'HowToStep',
                url: 'https://csmarks.link',
                name: 'Go to csmarks.link',
              },
              {
                '@type': 'HowToStep',
                url: 'https://csmarks.link',
                name: 'Click the big button on the screen',
              },
            ],
            totalTime: 'P1S',
          })}
        />
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

App.site_name = 'csmarks.link';
App.url = 'https://csmarks.link';

export default App;
