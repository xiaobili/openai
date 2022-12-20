/*
 * @Author: billy
 * @Date: 2022-12-18 18:50:29
 * @LastEditors: billy
 * @LastEditTime: 2022-12-18 19:12:02
 * @Description: main.js
 * Copyright (c) 2022 by billy, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
