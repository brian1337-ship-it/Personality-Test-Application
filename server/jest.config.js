module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/src/utils/runAfterAllTests.ts"],
  modulePathIgnorePatterns: ["<rootDir>/build/"],
};
