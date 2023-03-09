<script setup lang="ts">
import { allMembers } from '@/utils/data'
import { useTeamBottom, useTeamTop, useCounter } from '@/store'
import router from '@/router'
const counterStore = useCounter()
const { counter } = counterStore
counterStore.increment()
const teamTopStore = useTeamTop()
const teamBottomStore = useTeamBottom()
const { team: teamTop, members: topMembers } = teamTopStore
const { team: teamBottom, members: bottomMembers } = teamBottomStore

const teamBottomMembers = allMembers.filter((item) => bottomMembers?.includes(item.id))
const teamTopMembers = allMembers.filter((item) => topMembers?.includes(item.id))
const goBack = () => {
  router.back()
  counterStore.sub()
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header
        class="bg-[#409eff] text-white font-medium text-2xl flex items-center justify-center relative"
      >
        <div>Up({{ counter }})</div>
        <div class="absolute top-0 left-0 h-full flex items-center">
          <el-button type="warning" @click="goBack">重选</el-button>
        </div>
      </el-header>
    </el-container>
    <div class="flex justify-around p-5">
      <div class="w-[48%] text-center rounded-sm overflow-hidden">
        <div class="h-10 bg-gray-300 leading-10">
          {{ teamTop }}
        </div>
        <div class="p-2">
          <div class="py-3" v-for="o in teamTopMembers" :key="o.id">
            <el-card shadow="always">
              <span class="text-[#dca550]">{{ o?.back }}</span>
              <span>｜</span>
              <span class="text-[#67c23a]">{{ o?.name }}</span>
            </el-card>
          </div>
        </div>
      </div>
      <div class="w-[48%] text-center rounded-sm overflow-hidden">
        <div class="h-10 bg-gray-300 leading-10">
          {{ teamBottom }}
        </div>
        <div class="p-2">
          <div class="py-3" v-for="o in teamBottomMembers" :key="o.id">
            <el-card shadow="always">
              <span class="text-[#dca550]">{{ o?.back }}</span>
              <span>｜</span>
              <span class="text-[#67c23a]">{{ o?.name }}</span>
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-button type="primary" class="w-[50%] m-auto my-5" size="large" style="display: block">
    下一分
  </el-button>
</template>
