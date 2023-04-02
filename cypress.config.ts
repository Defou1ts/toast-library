import { defineConfig } from 'cypress';

import { APP_HOST, APP_PORT } from './src/constants/environment';

export default defineConfig({
	e2e: {
		baseUrl: `http://${APP_HOST}:${APP_PORT}`,
		screenshotsFolder: 'cypress/report/screenshots',
		reporter: 'mochawesome',
		reporterOptions: {
			html: false,
			json: true,
			reportDir: 'cypress/report',
			reportFilename: 'report',
			overwrite: true,
		},
		setupNodeEvents(on, config) {},
	},
});
