<script setup lang="ts">
import { ref, watch } from 'vue'

const checkboxGroup = ref([])
const teams = ['一队', '二队', '三队', '四队']

const change = () => {
  if (checkboxGroup.value.length > 2) {
    checkboxGroup.value.shift()
  }
}
const team1 = {}
</script>

<template lang="pug">
div(class="text-center text-3xl font-sans font-[700] pt-10") 上 line 选择
div(class="p-5 text-sm") 
  span 对战队伍：
  span(v-for="team in checkboxGroup" :key="team" :label="team") {{ team }}、
div(class="pl-5") 
  el-checkbox-group(v-model="checkboxGroup" size="large")
    el-checkbox-button(v-for="team in teams" :key="team" :label="team" @change="change()") {{ team }}
div(class="p-5")
  div(v-if="checkboxGroup[0]")
    div(class="text-xl") {{ checkboxGroup[0] }}
  div(v-if="checkboxGroup[1]")
    div(class="text-xl") {{ checkboxGroup[1] }}
  
</template>
