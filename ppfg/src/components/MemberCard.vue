<script lang="ts" setup>
const props = defineProps({
  back: Number,
  name: String,
  niceD: Number,
  catch: Number,
  assist: Number,
  fault: Number
})
</script>
<template>
  <el-card shadow="always" class="relative">
    <div class="absolute top-0 left-0 font-light">
      {{ props.fault ? '屎盘 x ' + props.fault : '' }}
    </div>
    <div class="absolute top-0 right-0 text-[red]">
      {{ props.catch ? '得分' : '' }}
    </div>
    <div class="absolute bottom-0 right-0 text-[green]">{{ props.assist ? '助攻' : '' }}</div>
    <div class="absolute bottom-0 left-0 font-light">
      {{ props.niceD ? 'niceD x ' + props.niceD : '' }}
    </div>
    <span class="text-[#dca550]">{{ props.back }}</span>
    <span>｜</span>
    <span class="text-[#67c23a]">{{ props.name }}</span>
  </el-card>
</template>
