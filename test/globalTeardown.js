// globalTeardown.js  用于停止本地服务
const { teardown: teardownDevServer } = require('jest-dev-server')

module.exports = async function globalTeardown() {
  await teardownDevServer()
}