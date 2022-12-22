<!--
 * @Author: billy
 * @Date: 2022-12-18 18:50:29
 * @LastEditors: billy
 * @LastEditTime: 2022-12-22 11:23:04
 * @Description: APP.vue
 * Copyright (c) 2022 by billy, All Rights Reserved. 
-->
<template>
  <div id="app">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="Open AI" name="openai"><OpenAI></OpenAI></el-tab-pane>
      <el-tab-pane label="Models" name="models"><Models></Models></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import OpenAI from "@/views/openai/index";
import Models from "@/views/models/index";
export default {
  name: "App",
  components: { OpenAI, Models },
  data() {
    return {
      activeName: "openai",
    };
  },
};
</script>

