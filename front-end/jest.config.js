module.exports = {
  preset: 'ts-jest',
  //Jestがテストファイルを検出するために使用するグロブパターン
  testMatch: ['<rootDir>/src/**/*/*.test.ts?(x)'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  //テストする環境のこと
  testEnvironment: 'node',
}
