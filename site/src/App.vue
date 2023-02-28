<template>
  <div>{{ page }}</div>
  <el-button @click="addData">page++</el-button>
  <el-button @click="toExcel">导出</el-button>
  <input type="text" v-model="title" />
  <el-button @click="start">提交</el-button>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="item in [
        'title',
        'type',
        'rating',
        'header_description',
        'description',
        'display_description',
        'sale_price',
        'original_price',
        'value_price',
        'ingredients',
      ]"
      :prop="item"
      :label="item"
      :key="item"
    />
  </el-table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as XLSX from "xlsx";
import axios from "axios";
const tableData = ref([{ title: "test" }]);
const page = ref(1);
const title = ref();
const getData = async (page, title) => {
  const res = await axios.post("http://localhost:3839/get", {
    part: title,
    page: page,
  });
  return res.data;
};

onMounted(async () => {});
const start = async () => {
  const data = await getData(page.value, title.value);
  tableData.value = data;
};
const addData = async () => {
  page.value += 1;
  try {
    const data = await getData(page.value, title.value);
    tableData.value = tableData.value.concat(...data);
  } catch (error) {
    console.log(error);
  }
};
const toExcel = () => {
  // 创建一个新的工作簿
  const workbook = XLSX.utils.book_new();
  // 创建一个新的工作表
  const worksheet = XLSX.utils.json_to_sheet(tableData.value);
  // 将工作表附加到工作簿，并将工作表命名为students
  XLSX.utils.book_append_sheet(workbook, worksheet, title.value);
  // 导出工作簿，并命名导出文件名为Presidents.xlsx
  XLSX.writeFile(workbook, title.value + ".xlsx");
};
</script>
