import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests', // ספריית המבחנים
  testMatch: '**/*.spec.ts', // התאמה עם הקבצים שמכילים את המבחנים
  use: {
    // הגדרות ברירת מחדל
    browserName: 'chromium',
  },
});
