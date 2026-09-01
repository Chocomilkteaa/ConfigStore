import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import react from "@eslint-react/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import typescriptEslint from "typescript-eslint";
import globals from "globals";

const config = defineConfig(
  reactRefresh.configs.vite,
  jsxA11y.flatConfigs.recommended,
  react.configs["strict-typescript"],
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.react-router/**"],
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        projectService: true,
      },
      globals: {
        ...globals.browser,
        ...globals.es2026,
      },
    },
    rules: {
      "react-refresh/only-export-components": [
        "error",
        {
          allowExportNames: ["links", "meta", "headers", "clientLoader", "clientAction", "ErrorBoundary", "HydrateFallback"], // Allow React-Router specific export names
        },
      ],
    },
  },
  eslintConfigPrettier
);

export default config;