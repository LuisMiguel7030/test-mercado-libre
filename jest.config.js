const { pathsToModuleNameMapper } = require('ts-jest/utils');
const tsconfig = require('./tests/tsconfig.test.json');

module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/tests/setupAfterEnv.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths),
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],

  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform tsx into js rather than leaving it tsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> 'jsx': 'react'
    'ts-jest': {
      tsconfig: '<rootDir>/tests/tsconfig.test.json',
    },
  },
};
