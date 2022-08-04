import fs from 'fs'
import path from 'path'

const filePath = process.argv[2]
const jsonString = process.argv[3]
const fileExists = fs.existsSync(filePath)

const photos = fileExists ? JSON.parse(fs.readFileSync(filePath).toString()) : []
const json = JSON.parse(jsonString)
photos.push(json)

const dirName = path.dirname(filePath)
if (!fileExists && dirName !== '.') {
  fs.mkdirSync(dirName, {recursive: true})
}

fs.writeFileSync(filePath, JSON.stringify(photos, null, 2))
