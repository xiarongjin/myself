import XLSX from 'xlsx'
import fs from 'fs'
const workbook = XLSX.readFileSync('./data.xlsx')
const sheet_name_list = workbook.SheetNames
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])

const fileName = './data.ts'
console.log(data)
const content = 'export const excelData = ' + JSON.stringify(data, null, 2)

fs.writeFile(fileName, content, (err) => {
  if (err) throw err
  console.log('文件已保存！')
})
