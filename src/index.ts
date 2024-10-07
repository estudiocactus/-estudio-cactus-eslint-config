import { TSESLint } from "@typescript-eslint/utils";
import * as tsParser from "@typescript-eslint/parser";

import { rules } from "./rules";

const eslintRuleNames = [...new TSESLint.Linter().getRules().keys()];
const namesOfEslintRulesForWhichWeAreUsingTsEquivalents =
  eslintRuleNames.filter((name) =>
    Object.hasOwn(rules, `@typescript-eslint/${name}`),
  );

const config: TSESLint.ClassicConfig.Config = {
  parserOptions: {
    tsParser,
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "import",
    "n",
    "promise",
    "prettier",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    ...Object.fromEntries(
      namesOfEslintRulesForWhichWeAreUsingTsEquivalents.map((name) => [
        name,
        "off",
      ]),
    ),
    ...rules,
  },
};

export = config;
