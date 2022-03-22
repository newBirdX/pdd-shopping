const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less', 
      patterns: [path.resolve(__dirname, './src/style/index.less')]// less所在文件路径  
    }}
    })
