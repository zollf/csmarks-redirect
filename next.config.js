/* eslint-disable */
const path = require('path');

const svgToMiniDataURI = require('mini-svg-data-uri');
const withPlugins = require('next-compose-plugins');
const nextPWA = require('next-pwa');
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});

require('dotenv').config();

const srcPath = path.resolve(__dirname, 'src');

module.exports = withPlugins(
  [
    bundleAnalyzer,
    nextPWA,
  ],
  {
    // using webpack 5 for next-pwa
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
    future: {
      webpack5: true,
    },
    permanent: true,
    sassOptions: {
      prependData: '@import "~styles/globals.scss";',
    },

    webpack(config, options) {
      // Markdown Loader
      config.module.rules.push(
        ...[
          {
            test: /\.svg$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  generator: (content) => svgToMiniDataURI(content.toString()),
                },
              },
            ],
          },
        ],
      );

      config.resolve.modules.push(srcPath);
      return config;
    },
  },
);
