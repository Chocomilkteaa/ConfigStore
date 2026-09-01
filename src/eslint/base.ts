import eslintJs from "@eslint/js";
import typescriptEslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";

const config = defineConfig(
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
    files: ["**/*.{ts,tsx}"],
    extends: [
      eslintJs.configs.recommended,
      typescriptEslint.configs.strictTypeChecked,
      typescriptEslint.configs.stylisticTypeChecked,
      perfectionist.configs["recommended-natural"],
    ],
    languageOptions: {
      globals: {
        ...globals.es2024,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true, // Allows numbers in template expressions. Ex. `${42}`
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      'perfectionist/sort-modules': [
        'error',
        {
          type: 'usage',
        }
      ],
    },
  },
  eslintConfigPrettier
);

export default config;