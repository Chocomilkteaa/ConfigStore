import react from "@eslint-react/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, type ConfigObject } from "eslint/config";
import globals from "globals";
import typescriptEslint from "typescript-eslint";
import type { CreateConfigOptions } from "./createConfig.type.ts";

function createConfig(options: CreateConfigOptions): ConfigObject[] {
  return defineConfig(
    reactRefresh.configs.vite,
    jsxA11y.flatConfigs.recommended,
    react.configs["strict-typescript"],
    {
      files: options.files,
      ignores: options.ignores ?? ["**/node_modules/**", "**/dist/**", "**/.react-router/**"],
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.es2026,
        },
        parser: typescriptEslint.parser,
        parserOptions: {
          ecmaFeatures: { jsx: true },
          projectService: true,
          tsconfigRootDir: __dirname,
        },
        ...options.languageOptions,
      },
      rules: {
        "react-refresh/only-export-components": [
          "error",
          {
            allowExportNames: ["links", "meta", "headers", "clientLoader", "clientAction", "ErrorBoundary", "HydrateFallback"], // Allow React-Router specific export names
          },
        ],
        ...options.rules,
      },
    },
    eslintConfigPrettier,
  );
}

export { createConfig };
