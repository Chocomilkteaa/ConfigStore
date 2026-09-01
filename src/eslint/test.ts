import vitest from "@vitest/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

const config = defineConfig(
  vitest.configs.recommended,
  {
    files: ["**/tests/**/*.{test,spec,mock,util}.{ts,tsx}"],
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
    },
  },
  eslintConfigPrettier,
);

export default config;
