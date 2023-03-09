import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
  state: () => ({
    counter: 0
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

export const useTeamTop = defineStore('teamTop', {
  // other options...
  state: () => ({
    team: '',
    members: [] as number[]
  }),
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
    members: [] as number[]
  }),
  actions: {
    setTeam(item: string) {
      this.team = item
    },
    setMembers(members: number[]) {
      this.members = members
    }
  }
})
