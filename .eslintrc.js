const { getEslintConfig } = require("@harmonix-hub/eslint");

const baseConfig = getEslintConfig({ useReact: false });

/** @type import("eslint").Linter.Config */
module.exports = {
  ...baseConfig,
};
