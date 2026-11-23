import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';

export default defineConfig({
  plugins: [eslint()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        experiences: resolve(import.meta.dirname, 'experiences.html'),
        formations: resolve(import.meta.dirname, 'formations.html'),
        competences: resolve(import.meta.dirname, 'competences.html'),
      },
    },
  },
});