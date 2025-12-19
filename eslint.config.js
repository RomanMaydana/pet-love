// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: ["dist", "node_modules", "*.config.js", "*.config.ts"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: ["./tsconfig.app.json", "./tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'always'],
      'indent': ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'prop-types': 'off',
      // TypeScript - Require return types on functions
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off'
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  }
);
