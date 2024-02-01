module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/src/utils/setupFilesAfterEnv.ts"],
  modulePathIgnorePatterns: ["<rootDir>/build/"],
};
