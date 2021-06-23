import { GlobalWithFetchMock } from 'jest-fetch-mock';
import faker from 'faker';

faker.seed(101);

// eslint-disable-next-line prettier/prettier
const customGlobal: GlobalWithFetchMock = (global as any) as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;
