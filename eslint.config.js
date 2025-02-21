import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import babelParser from "@babel/eslint-parser"; // Importáld a Babel parsert

export default [
  js.configs.recommended, // ESLint ajánlott szabályai
  {
    files: ["**/*.js", "**/*.jsx"], // Minden .js és .jsx fájlra vonatkozik
    languageOptions: {
      ecmaVersion: "latest", // Legújabb ECMAScript verzió
      sourceType: "module", // Modulok használata
      parser: babelParser, // Babel parser használata
      parserOptions: {
        requireConfigFile: false, // Nincs szükség külső Babel konfigurációs fájlra
        babelOptions: {
          presets: ["@babel/preset-react"], // React JSX támogatása
        },
      },
      globals: {
        // Böngésző globális változók
        localStorage: "readonly",
        navigator: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        document: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        Intl: "readonly",
        fetch: "readonly",
        FormData: "readonly",
      },
    },
    plugins: {
      react: reactPlugin, // React plugin
      "react-hooks": reactHooksPlugin, // React Hooks plugin
      "react-refresh": reactRefreshPlugin, // React Refresh plugin
    },
    rules: {
      // Egyéni szabályok
      "react/jsx-uses-react": "error", // Hibát jelez, ha a React nincs használva
      "react/jsx-uses-vars": "error", // Hibát jelez, ha egy változó nincs használva
      "react-hooks/rules-of-hooks": "error", // Hibát jelez, ha a Hook szabályok sérülnek
      "react-hooks/exhaustive-deps": "warn", // Figyelmeztet, ha a függőségi tömb hiányos
      "react-refresh/only-export-components": "warn", // Figyelmeztet, ha nem komponenseket exportálsz
    },
    settings: {
      react: {
        version: "detect", // Automatikusan észleli a React verziót
      },
    },
  },
];
