import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import vitest from "@vitest/eslint-plugin";

const config = defineConfig(
  vitest.configs.recommended,
  {
    files: ["**/tests/**/*.{test,spec}.{ts,tsx}"],
    rules: {
      // Relaxes strict typing constraints in tests where dynamic values are common.
      "@typescript-eslint/no-unsafe-assignment": "off",
      // Allows passing loosely typed values in test helper flows.
      "@typescript-eslint/no-unsafe-argument": "off",
      // Allows returning loosely typed values in test helper flows.
      "@typescript-eslint/no-unsafe-return": "off",
      // Allows accessing properties on loosely typed values in test helper flows.
      "@typescript-eslint/no-unsafe-member-access": "off",
      // Allows calling functions on loosely typed values in test helper flows.
      "@typescript-eslint/no-unsafe-call": "off",
      // Permits explicit any in tests to reduce noise for pragmatic test code.
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  eslintConfigPrettier
);

export default config;