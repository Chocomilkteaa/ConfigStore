import type { Linter } from "eslint";

interface CreateConfigOptions {
    files?: string[];
    ignores?: string[];
    languageOptions?: Linter.LanguageOptions;
    rules?: Linter.RulesRecord;
}

export type { CreateConfigOptions };