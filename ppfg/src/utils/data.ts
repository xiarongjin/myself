// id 是 primary
export type Member = {
  id: number
  name: string
  back: number
  tag: string
}
export type Team = {
  id: number
  name: string
  numbers: Member[]
}
export type Record = {
  id: number // 自增
  team1: number // team1 id
  team2: number // team2 id
  match: number // 第几场
  point: number // 第几分
  memberId: number // 队员
  niceD: boolean
  catch: boolean
  assist: boolean
}
export const allMembers = [
  { id: 1, name: 'rj0', back: 0, tag: '' },
  { id: 2, name: 'rj1', back: 1, tag: '' },
  { id: 3, name: 'rj2', back: 2, tag: '' },
  { id: 4, name: 'rj3', back: 3, tag: '' },
  { id: 5, name: 'rj4', back: 4, tag: '' },
  { id: 6, name: 'rj5', back: 5, tag: '' },
  { id: 7, name: 'rj6', back: 6, tag: '' },
  { id: 8, name: 'rj7', back: 7, tag: '' },
  { id: 9, name: 'rj8', back: 8, tag: '' },
  { id: 10, name: 'rj9', back: 9, tag: '' },
  { id: 11, name: 'rj10', back: 10, tag: '' },
  { id: 12, name: 'rj11', back: 11, tag: '' },
  { id: 13, name: 'rj12', back: 12, tag: '' },
  { id: 14, name: 'rj13', back: 13, tag: '' },
  { id: 15, name: 'rj14', back: 14, tag: '' },
  { id: 16, name: 'rj15', back: 15, tag: '' },
  { id: 17, name: 'rj16', back: 16, tag: '' },
  { id: 18, name: 'rj17', back: 17, tag: '' },
  { id: 19, name: 'rj18', back: 18, tag: '' },
  { id: 20, name: 'rj19', back: 19, tag: '' },
  { id: 21, name: 'rj20', back: 20, tag: '' },
  { id: 22, name: 'rj21', back: 21, tag: '' },
  { id: 23, name: 'rj22', back: 22, tag: '' },
  { id: 24, name: 'rj23', back: 23, tag: '' },
  { id: 25, name: 'rj24', back: 24, tag: '' },
  { id: 26, name: 'rj25', back: 25, tag: '' },
  { id: 27, name: 'rj26', back: 26, tag: '' },
  { id: 28, name: 'rj27', back: 27, tag: '' },
  { id: 29, name: 'rj28', back: 28, tag: '' },
  { id: 30, name: 'rj29', back: 29, tag: '' },
  { id: 31, name: 'rj30', back: 30, tag: '' },
  { id: 32, name: 'rj31', back: 31, tag: '' },
  { id: 33, name: 'rj32', back: 32, tag: '' },
  { id: 34, name: 'rj33', back: 33, tag: '' },
  { id: 35, name: 'rj34', back: 34, tag: '' },
  { id: 36, name: 'rj35', back: 35, tag: '' },
  { id: 37, name: 'rj36', back: 36, tag: '' },
  { id: 38, name: 'rj37', back: 37, tag: '' },
  { id: 39, name: 'rj38', back: 38, tag: '' },
  { id: 40, name: 'rj39', back: 39, tag: '' },
  { id: 41, name: 'rj40', back: 40, tag: '' },
  { id: 42, name: 'rj41', back: 41, tag: '' },
  { id: 43, name: 'rj42', back: 42, tag: '' },
  { id: 44, name: 'rj43', back: 43, tag: '' },
  { id: 45, name: 'rj44', back: 44, tag: '' },
  { id: 46, name: 'rj45', back: 45, tag: '' },
  { id: 47, name: 'rj46', back: 46, tag: '' },
  { id: 48, name: 'rj47', back: 47, tag: '' }
]
export const team = [
  {
    id: 1,
    name: '一队',
    members: [...allMembers].splice(0, 12)
  },
  {
    id: 2,
    name: '二队',
    members: [...allMembers].splice(12, 12)
  },
  {
    id: 3,
    name: '三队',
    members: [...allMembers].splice(24, 12)
  },
  {
    id: 4,
    name: '四队',
    members: [...allMembers].splice(36, 12)
  }
]
