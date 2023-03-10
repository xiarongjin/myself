<script setup lang="ts">
import { allMembers, type Member } from '@/utils/data'
import { useTeamBottom, useTeamTop, useCounter, useMatch, type Record } from '@/store'
import router from '@/router'
import { ref } from 'vue'
const counterStore = useCounter()
const { counter } = counterStore
counterStore.increment()
const teamTopStore = useTeamTop()
const teamBottomStore = useTeamBottom()
const { teams: teamTop, members: topMembers } = teamTopStore
const { teams: teamBottom, members: bottomMembers } = teamBottomStore

const teamBottomMembers = allMembers.filter((item) => bottomMembers?.includes(item?.id))
const teamTopMembers = allMembers.filter((item) => topMembers?.includes(item?.id))
const goBack = () => {
  router.back()
  counterStore.sub()
}

interface RecordData {
  [index: number]: Record
}

const matchData = ref<RecordData>({})

const showPopup = ref(false)

const popStash = ref<Member>()

const { match } = useMatch()

let popupDataStash = ref<Record>({
  team1: teamTop?.id, // team1 id
  team2: teamBottom?.id, // team2 id
  match, // 第几场
  point: counter, // 第几分
  memberId: 0, // 队员
  niceD: 0,
  catch: 0,
  assist: 0,
  fault: 0
})

const initPopupData = (id: number) => {
  popupDataStash.value = {
    team1: teamTop.id, // team1 id
    team2: teamBottom.id, // team2 id
    match, // 第几场
    point: counter, // 第几分
    memberId: id, // 队员
    niceD: 0,
    catch: 0,
    assist: 0,
    fault: 0
  }
}

const openPopup = (o: Member) => {
  showPopup.value = true
  popStash.value = o
  if (matchData.value?.[o.id]) {
    popupDataStash.value = matchData.value?.[o.id]
  } else {
    initPopupData(o.id)
  }
}

const closePopup = () => {
  showPopup.value = false
  if (popupDataStash.value?.memberId) {
    matchData.value[popupDataStash.value?.memberId] = popupDataStash.value
  }
}
const nextPart = () => {
  console.log(matchData.value)

  router.back()
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
          {{ teamTop?.name }}
        </div>
        <div class="p-2">
          <div class="py-3" v-for="o in teamTopMembers" :key="o.id" @click="openPopup(o)">
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
          {{ teamBottom?.name }}
        </div>
        <div class="p-2">
          <div class="py-3" v-for="o in teamBottomMembers" :key="o.id" @click="openPopup(o)">
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
  <el-button
    type="primary"
    class="w-[50%] m-auto my-5"
    size="large"
    style="display: block"
    @click="nextPart"
  >
    下一分
  </el-button>

  <el-dialog
    v-model="showPopup"
    :title="popStash?.name"
    width="80%"
    align-center
    @close="closePopup"
  >
    <el-form :inline="true" :model="popupDataStash" class="demo-form-inline">
      <el-form-item label="助攻">
        <el-input-number v-model="popupDataStash.assist" :min="0" :max="10" />
      </el-form-item>
      <el-form-item label="得分">
        <el-input-number v-model="popupDataStash.catch" :min="0" :max="10" />
      </el-form-item>
      <el-form-item label="niceD">
        <el-input-number v-model="popupDataStash.niceD" :min="0" :max="10" />
      </el-form-item>
      <el-form-item label="屎pan">
        <el-input-number v-model="popupDataStash.fault" :min="0" :max="10" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="closePopup"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
