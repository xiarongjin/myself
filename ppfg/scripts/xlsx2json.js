import XLSX from 'xlsx'
import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const workbook = XLSX.readFileSync(__dirname + '/data.xlsx')
const sheet_name_list = workbook.SheetNames
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])

const fileName = __dirname + '/data.ts'
const content = 'export const excelData = ' + JSON.stringify(data, null, 2)

fs.writeFile(fileName, content, (err) => {
  if (err) throw err
  console.log('文件已保存！')
})
