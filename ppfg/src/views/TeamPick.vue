<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { team } from '../utils/data'
import { useTeamBottom, useTeamTop } from '@/store'
import { storeToRefs } from 'pinia'
const router = useRouter()

const teamTopStore = useTeamTop()
const teamBottomStore = useTeamBottom()

const { team: teamTop, members: checkboxGroupTop } = storeToRefs(teamTopStore)
const teamTopMembers = computed(() => {
  return team.filter((i) => i.name == teamTop.value)[0]?.members
})

const { team: teamBottom, members: checkboxGroupBottom } = storeToRefs(teamBottomStore)
const teamBottomMembers = computed(() => {
  return team.filter((i) => i.name == teamBottom.value)[0]?.members
})

const submit = () => {
  if (checkboxGroupBottom.value.length < 4) {
    console.log('下方队伍或人数还未选好～')
    return
  }
  if (checkboxGroupTop.value.length < 4) {
    console.log('上方队伍或人数还未选好～')
    return
  }
  router.push({
    name: 'up'
  })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header
        class="bg-[#409eff] text-white font-medium text-2xl flex items-center justify-center"
        >Pick</el-header
      >
      <div class="p-5">
        <el-radio-group class="w-full" v-model="teamTop" size="large">
          <el-radio-button
            v-for="item in team"
            :label="item.name"
            :key="item.name"
            :disabled="item.name == teamBottom"
          />
        </el-radio-group>
        <el-card class="box-card mt-1">
          <template #header>
            <div class="card-header flex justify-between">
              <span>{{ teamTop ? teamTop : '请选择队伍' }}</span>
              <el-button class="button" type="primary">确认</el-button>
            </div>
          </template>
          <el-checkbox-group
            class="flex flex-wrap justify-between"
            v-model="checkboxGroupTop"
            size="small"
          >
            <el-checkbox
              v-for="(o, i) in teamTopMembers"
              :key="i"
              :label="o.id"
              border
              style="margin: 5px"
              :disabled="checkboxGroupTop.length > 3 && !checkboxGroupTop.includes(o.id)"
            >
              <span class="text-[#67c23a]">{{ o?.name }}</span>
              <span>｜</span>
              <span class="text-[#dca550]">{{ o?.back }}</span>
            </el-checkbox>
          </el-checkbox-group>
        </el-card>
      </div>

      <div class="p-5">
        <el-radio-group class="w-full" v-model="teamBottom" size="large">
          <el-radio-button
            v-for="item in team"
            :label="item.name"
            :key="item.name"
            :disabled="item.name == teamTop"
          />
        </el-radio-group>
        <el-card class="box-card mt-1">
          <template #header>
            <div class="card-header flex justify-between">
              <span>{{ teamBottom ? teamBottom : '请选择队伍' }}</span>
              <el-button class="button" type="primary">确认</el-button>
            </div>
          </template>
          <el-checkbox-group
            class="flex flex-wrap justify-between"
            v-model="checkboxGroupBottom"
            size="small"
          >
            <el-checkbox
              v-for="(o, i) in teamBottomMembers"
              :key="i"
              :label="o.id"
              border
              style="margin: 5px"
              :disabled="checkboxGroupBottom.length > 3 && !checkboxGroupBottom.includes(o.id)"
            >
              <span class="text-[#67c23a]">{{ o?.name }}</span>
              <span>｜</span>
              <span class="text-[#dca550]">{{ o?.back }}</span>
            </el-checkbox>
          </el-checkbox-group>
        </el-card>
      </div>
    </el-container>
  </div>
  <el-button
    type="primary"
    class="w-[50%] m-auto my-5"
    size="large"
    style="display: block"
    @click="submit"
  >
    开始
  </el-button>
</template>
