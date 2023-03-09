let data = []
for (let i = 0; i < 48; i++) {
  data.push({ id: i + 1, name: 'rj' + i, back: i, tag: '' })
}
// console.log(data)
console.log(data.splice(12, 12))
