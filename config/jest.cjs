// https://jestjs.io/docs/configuration
const config = {
  bail: 3,
  clearMocks: true,
  errorOnDeprecated: true,
  globals: {},
  moduleFileExtensions: ['js', 'mjs'],
  moduleNameMapper: {},
  testMatch: [`<rootDir>/**/*.test.{js,mjs}`],
  slowTestThreshold: 5,
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  testTimeout: 5000,
  transform: {},
  verbose: true
}

// console.log('=== Jest config ===', config)

module.exports = config
