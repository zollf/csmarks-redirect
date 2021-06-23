import { GlobalWithFetchMock } from 'jest-fetch-mock';
import faker from 'faker';

jest.mock('next-auth/client');

faker.seed(101);

process.env.MONGODB_URI = 'test';
process.env.MONGODB_DB = 'test';
process.env.NEXTAUTH_URL = 'http://localhost:3000';

// eslint-disable-next-line prettier/prettier
const customGlobal: GlobalWithFetchMock = (global as any) as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;
