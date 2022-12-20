/*
 * @Author: billy
 * @Date: 2022-12-18 18:50:29
 * @LastEditors: billy
 * @LastEditTime: 2022-12-18 20:07:49
 * @Description: vue.config.js
 * Copyright (c) 2022 by billy, All Rights Reserved. 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 1024,
    open: true,
    proxy: {
      '/completions': {
        target: 'https://api.openai.com/v1',
        ws: false,
        changeOrigin: true,
      },
      '/models': {
        target: 'https://api.openai.com/v1',
        ws: false,
        changeOrigin: true,
      },
    }
  },
})
