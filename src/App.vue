<!--
 * @Author: billy
 * @Date: 2022-12-18 18:50:29
 * @LastEditors: billy
 * @LastEditTime: 2022-12-18 20:06:54
 * @Description: APP.vue
 * Copyright (c) 2022 by billy, All Rights Reserved. 
-->
<template>
  <div id="app">
    <OpenAI></OpenAI>
  </div>
</template>

<script>
import OpenAI from "@/views/openai/index";
export default {
  name: "App",
  components: { OpenAI },
};
</script>

