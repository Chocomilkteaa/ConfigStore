import eslintJs from "@eslint/js";
import typescriptEslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";

const config = defineConfig(
  {
    ignores: [
      "node_modules/",
    ],
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
          allowNumber: true, // ALLOW: Safely casts numbers to strings in templates
        },
      ],
      // Flags declared but unused variables while allowing intentionally ignored names prefixed with _.
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      // Disables the automatic sorting of module declarations to allow custom ordering.
      'perfectionist/sort-modules': 'off',
    },
  },
  eslintConfigPrettier
);

export default config;