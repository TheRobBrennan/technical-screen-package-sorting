// jest.config.ts
module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [ // Specify which files to include in the coverage report
    'pages/**/*.{js,jsx,ts,tsx}', // Include all files in the pages directory
    'components/**/*.{js,jsx,ts,tsx}', // Include all files in the components directory
    'app/services/**/*.{js,jsx,ts,tsx}', // Include all files in the services directory
    '!**/*.d.ts', // Exclude TypeScript declaration files
    '!**/node_modules/**', // Exclude node_modules directory
  ],
  coverageThreshold: { // Optional: Configure minimum coverage thresholds
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'], // Optional: Specify coverage report formats
};
