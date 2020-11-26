const { setup: setupDevServer } = require('jest-dev-server')

module.exports = async function globalSetup() {
  await setupDevServer({
    command: `npm run server`,
    launchTimeout: 2000,
    port: 3000,
  })
  // Your global setup
}