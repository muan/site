import fs from 'fs'

const datetime = process.argv[2]
const content = process.argv[3]
const alphabets = [...'umoacenrvwz']
const idx = fs.readdirSync('_notes').filter(p => p.startsWith(datetime.split(' ')[0])).length
const a = alphabets[idx]
const filePath = `_notes/${datetime.split(' ')[0]}-${a}${a}.md`
const postContent = `---
title: Note
layout: default
open_heart: true
date: ${datetime}
---

${content}
`

fs.writeFileSync(filePath, postContent)
