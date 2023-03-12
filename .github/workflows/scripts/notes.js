import fs from 'fs'
import path from 'path'

const datetime = process.argv[2]
const content = process.argv[3]
const numberOfNotesToday = fs.readdirSync('_notes').filter(p => p.startsWith(datetime.split(' ')[0])).length
const filePath = `_notes/${datetime.split(' ')[0]}-${numberOfNotesToday}.md`
const postContent = `
---
layout: default
date: ${datetime}
---

${content}
`

fs.writeFileSync(filePath, postContent.trim())
