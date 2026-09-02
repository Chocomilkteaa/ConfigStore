import eslintJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, type ConfigObject } from "eslint/config";
import globals from "globals";
import typescriptEslint from "typescript-eslint";
import type { CreateConfigOptions } from "./createConfig.type.ts";

function createConfig(options: CreateConfigOptions): ConfigObject[] {
  return defineConfig(
    {
      extends: [
        eslintJs.configs.recommended,
        typescriptEslint.configs.strictTypeChecked,
        typescriptEslint.configs.stylisticTypeChecked,
        perfectionist.configs["recommended-natural"],
      ],
      files: options.files ?? ["**/*.{ts,tsx}"],
      ignores: options.ignores ?? ["**/node_modules/**", "**/dist/**"],
      languageOptions: {
        ecmaVersion: "latest",
        globals: {
          ...globals.es2026,
          ...globals.node,
        },
        parserOptions: {
          projectService: true,
          tsconfigRootDir: __dirname,
        },
        sourceType: "module",
        ...options.languageOptions,
      },
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            ignoreRestSiblings: true,
            varsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          {
            allowNumber: true, // Allows numbers in template expressions. Ex. `${42}`
          },
        ],
        "perfectionist/sort-modules": [
          "error",
          {
            type: "usage",
          },
        ],
        ...options.rules,
      },
    },
    eslintConfigPrettier,
  );
}

export { createConfig };
