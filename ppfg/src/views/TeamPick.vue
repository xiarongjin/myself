<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { team } from '../utils/data'
import { useCounter, useHistory, useMatch, useTeamBottom, useTeamTop } from '@/store'
import { storeToRefs } from 'pinia'
const router = useRouter()
const counterStore = useCounter()
const { counter } = counterStore
const teamTopStore = useTeamTop()
const teamBottomStore = useTeamBottom()
const history = useHistory()
const { team1Points, team2Points } = storeToRefs(history)

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
const { match } = storeToRefs(useMatch())
const options = [
  {
    label: '第一场',
    value: 1
  },
  {
    label: '第二场',
    value: 2
  },
  {
    label: '第三场',
    value: 3
  },
  {
    label: '排位赛第一场',
    value: 5
  },
  {
    label: '排位赛第二场',
    value: 6
  }
]
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header
        class="bg-[#409eff] relative text-white font-medium text-2xl flex items-center justify-center"
      >
        <div>Pick</div>
        <!-- <div class="absolute top-0 left-0 h-full flex items-center">
          <router-link to="/"> <el-button type="warning"> 返回首页 </el-button></router-link>
        </div> -->
      </el-header>
      <div class="p-5 relative">
        <div class="text-sm mb-5 h-full flex items-center">
          <div>
            当前场次:
            <el-select v-model="match" size="small" filterable placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="pl-5">第{{ counter }}分 {{ team1Points + ':' + team2Points }}</div>
        </div>
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
