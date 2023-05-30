const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  configureWebpack: {
    //配置webpack自动按需引入element-plus，
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  devServer: {
    proxy: {
      '/hodor': {
        target: 'http://106.55.104.216:8088',
        ws: true,
        changeOrigin: true,
      },
    },
  },
}
