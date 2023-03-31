<script setup lang="ts">
// import { ref } from 'vue'

import { onMounted } from 'vue'

// const activeIndex = ref('home')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>

<template>
  <!-- <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <el-menu-item index="home">签到广场</el-menu-item>
    <el-menu-item index="member">成员录入</el-menu-item>
    <el-menu-item index="pick">赛事系统</el-menu-item>
  </el-menu> -->
  <router-view></router-view>
</template>
