// globalSetup.js，用于启动本地服务
const { setup: setupDevServer } = require('jest-dev-server')

module.exports = async function globalSetup() {
  await setupDevServer({
    command: `npm run server`, // 启动本地服务器的指令
    launchTimeout: 2000, // 启动等待所需时间
    port: 3000, // 本地服务所在端口
  })
}