/*
 * @Author: billy
 * @Date: 2022-12-18 18:50:29
 * @LastEditors: billy
 * @LastEditTime: 2022-12-22 11:26:07
 * @Description: vue.config.js
 * Copyright (c) 2022 by billy, All Rights Reserved. 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // webpack-dev-server 相关配置
  devServer: {
    port: 1024,
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
