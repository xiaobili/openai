<template>
  <div>
    <el-table :data="tableData" stripe style="width: 80%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="id">
              <el-tag>{{ props.row.permission[0].id }}</el-tag>
            </el-form-item>
            <el-form-item label="allow_create_engine">
              <el-tag>{{ props.row.permission[0].allow_create_engine }}</el-tag>
            </el-form-item>
            <el-form-item label="allow_fine_tuning">
              <el-tag>{{ props.row.permission[0].allow_fine_tuning }}</el-tag>
            </el-form-item>
            <el-form-item label="allow_logprobs">
              <el-tag>{{ props.row.permission[0].allow_logprobs }}</el-tag>
            </el-form-item>
            <el-form-item label="allow_sampling">
              <el-tag>{{ props.row.permission[0].allow_sampling }}</el-tag>
            </el-form-item>
            <el-form-item label="allow_search_indices">
              <el-tag>{{
                props.row.permission[0].allow_search_indices
              }}</el-tag>
            </el-form-item>
            <el-form-item label="allow_view">
              <el-tag>{{ props.row.permission[0].allow_view }}</el-tag>
            </el-form-item>
            <el-form-item label="created">
              <el-tag>{{ props.row.permission[0].created }}</el-tag>
            </el-form-item>
            <el-form-item label="group">
              <el-tag>{{ props.row.permission[0].group }}</el-tag>
            </el-form-item>
            <el-form-item label="is_blocking">
              <el-tag>{{ props.row.permission[0].is_blocking }}</el-tag>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="created" prop="created"> </el-table-column>
      <el-table-column label="object" prop="object"></el-table-column>
      <el-table-column label="owned_by" prop="owned_by"></el-table-column>
      <el-table-column label="root" prop="root"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { listModels } from "@/api/openai";
export default {
  name: "Models",
  created() {
    this.getModels();
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getModels() {
      var _this = this;
      listModels().then((res) => {
        _this.tableData = res.data;
        console.log(res);
      });
    },
  },
};
</script>