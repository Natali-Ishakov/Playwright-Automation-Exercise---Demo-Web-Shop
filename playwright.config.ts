import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests', 
  testMatch: '**/*.spec.ts',  
  use: {
    browserName: 'chromium',
  },
  
});
