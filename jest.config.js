/* eslint-disable no-undef */
module.exports = {
  cacheDirectory: 'node_modules/.cache/jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts', // Ignore declaration files
    '!src/test/**/*', // Ignore test helpers/config
    '!src/typings/**/*', // Ignore typings
    '!src/hooks/**',
    '!src/lib/**',
    '!src/util/**',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
    '!src/pages/api/**',
    '!src/pages/admin/**',
    '!src/stores/**',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '\\.(gif|jpg|pdf|png|md|webm|svg)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1', '<rootDir>/$1'],
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(css)': 'identity-obj-proxy',
  },
  setupFiles: ['<rootDir>/test/config.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
};
