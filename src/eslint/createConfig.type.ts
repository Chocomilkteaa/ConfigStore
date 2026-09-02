import type { Linter } from "eslint";

interface CreateConfigOptions {
    files?: string[];
    ignores?: string[];
    rules?: Linter.RulesRecord;
    languageOptions?: Linter.LanguageOptions;
}

export type { CreateConfigOptions };