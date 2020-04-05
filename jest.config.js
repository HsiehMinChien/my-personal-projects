module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "styl"],
  moduleNameMapper: {
    "\\.(css|less|styl)$": "<rootDir>/__mocks__/styleMock.ts"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/__tests__/*.(ts|tsx)"],
  setupFiles: ["./jest.setup.ts"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  }
};
