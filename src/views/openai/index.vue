<!--
 * @Author: billy
 * @Date: 2022-12-18 11:44:17
 * @LastEditors: billy
 * @LastEditTime: 2022-12-18 20:08:49
 * @Description: OpenAI 主页面
 * Copyright (c) 2022 by billy, All Rights Reserved. 
-->
<template>
  <el-container>
    <el-header>
      <el-row>
        <el-select v-model="value" placeholder="请选择" filterable>
          <el-option
            v-for="item in models"
            :key="item.id"
            :label="item.id"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-row>
    </el-header>
    <el-main>
      <el-row justify="center" type="flex">
        <markdown
          :source="resp"
          v-loading="loading"
          element-loading-text="拼命加载中"
        ></markdown>
      </el-row>
    </el-main>
    <el-footer>
      <el-row justify="center" type="flex">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" @click="sentMsg">发送</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>
  <script>
import Markdown from "@/components/Markdown/index";
import { listModels, queryOpenAI } from "@/api/openai";
export default {
  name: "OpenAI",
  components: {
    Markdown,
  },
  mounted() {
    this.getModels();
  },
  data() {
    return {
      param: {
        model: "",
        prompt: "",
        max_tokens: 1024,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ['"""'],
      },
      input: "",
      models: {},
      value: "text-davinci-003",
      resp: "",
      loading: false,
    };
  },
  methods: {
    sentMsg() {
      var _this = this;
      if (this.value == "") {
        this.$message({
          message: "请选择 model",
          type: "warning",
        });
      } else if (this.input == "") {
        this.$message({
          message: "请输入内容",
          type: "warning",
        });
      } else {
        this.param.prompt = this.input;
        this.param.model = this.value;
        this.loading = true;
        queryOpenAI(this.param).then(
          (res) => {
            _this.resp = res.choices[0].text;
            console.log(res);
            _this.loading = false;
            _this.input = "";
          },
          (error) => {
            this.loading = false;
            _this.input = "";
          }
        );
      }
    },
    getModels() {
      var _this = this;
      listModels().then((res) => {
        _this.models = res.data;
      });
    },
  },
};
</script>
  
  <style>
.el-input {
  margin-right: 20px;
}

.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}

.md {
  width: 800px;
}
</style>