import vitest from "@vitest/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { type ConfigObject, defineConfig } from "eslint/config";

import type { CreateConfigOptions } from "./createConfig.type.ts";

function createConfig(options: CreateConfigOptions): ConfigObject[] {
  return defineConfig(
    vitest.configs.recommended,
    {
      files: options.files ?? ["**/tests/**/*.{test,spec,mock,util}.{ts,tsx}"],
      ignores: options.ignores ?? [],
      languageOptions: {
        globals: {
          ...vitest.environments.env.globals,
        },
        ...options.languageOptions
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "vitest/no-standalone-expect": [
          "error",
          {
            additionalTestBlockFunctions: [
              "it",
              "it.for",
              "it.each",
              "test",
              "test.for",
              "test.each",
            ],
          },
        ],
        ...options.rules,
      },
    },
    eslintConfigPrettier,
  );
}

export { createConfig };
