import XLSX from 'xlsx'
import fs from 'fs'
// 要转换成 XLSX 的 JSON 数据
const data = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Jane', age: 25, city: 'San Francisco' },
  { name: 'Bob', age: 40, city: 'Chicago' }
]

// 将 JSON 转换成 XLSX 格式的数据
const worksheet = XLSX.utils.json_to_sheet(data)

// 创建 XLSX 文件并保存
const workbook = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
fs.writeFileSync('data.xlsx', XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' }))
