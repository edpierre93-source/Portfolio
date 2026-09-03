import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
]);

import { config } from 'vite';
import eslint from 'vite-plugin-eslint2';

export default config({
  plugins: [
    eslint() // Ajoute ESLint au processus de build/dev de Vite
  ],
});