/* eslint @typescript-eslint/no-var-requires: "off" */
import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'a8nh14',
  // video: false,
  videoCompression: 0,
  e2e: {
    // experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*.*'],
    },
  },
});
