const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'http://127.0.0.1:3000'//proxy means to send msgs via vue developer server, which will then be sent to express server @ address
  }
})
