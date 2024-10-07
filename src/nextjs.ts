import { type TSESLint } from "@typescript-eslint/utils";

import config from ".";

const nextjsConfig: TSESLint.ClassicConfig.Config = {
  ...config,
  extends: [...(config.extends as string[]), "plugin:@next/next/recommended"],
};

export = nextjsConfig;
