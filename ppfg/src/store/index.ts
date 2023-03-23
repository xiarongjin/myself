import { team } from '@/utils/data'
import { defineStore } from 'pinia'
export type Record = {
  team1: number // team1 id
  team2: number // team2 id
  match: number // 第几场
  point: number // 第几分
  memberId: number // 队员
  niceD: number
  catch: number
  assist: number
  fault: number
}

export const useHistory = defineStore('history', {
  state: () => ({
    team1Points: 0,
    team2Points: 0
  }),
  actions: {
    team1Add() {
      this.team1Points++
    },
    team2Add() {
      this.team2Points++
    }
  }
})

export const useCounter = defineStore('counter', {
  state: () => ({
    counter: 1
  }),
  actions: {
    increment() {
      this.counter++
    },
    sub() {
      this.counter--
    }
  }
})
export const useMatch = defineStore('match', {
  state: () => ({
    match: 1
  })
})

export const useTeamTop = defineStore('teamTop', {
  // other options...
  state: () => ({
    team: '',
    members: [] as number[]
  }),
  getters: {
    teams(state) {
      return team.filter((item) => item.name == state.team)[0]
    }
  },
  actions: {
    setTeam(item: string) {
      this.team = item
    },
    setMembers(members: number[]) {
      this.members = members
    }
  }
})

export const useTeamBottom = defineStore('teamBottom', {
  // other options...
  state: () => ({
    team: '',
    id: Number,
    members: [] as number[]
  }),
  getters: {
    teams(state) {
      return team.filter((item) => item.name == state.team)[0]
    }
  },
  actions: {
    setTeam(item: string) {
      this.team = item
    },
    setMembers(members: number[]) {
      this.members = members
    }
  }
})
