module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: ["standard", "plugin:prettier/recommended", "plugin:node/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  overrides: [
    {
      files: ["hardhat.config.js"],
      globals: { task: true },
    },
  ],
  rules: {
    "no-unused-expressions": "off",
    "no-process-exit": "off",
    "node/no-unpublished-require": "off",
  },
};
