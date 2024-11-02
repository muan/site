import fs from 'fs'

const datetime = process.argv[2]
const tags = process.argv[3]
const lang = process.argv[4]
const content = process.argv[5]
const alphabets = [...'umoacenrvwz']
const idx = fs.readdirSync('_notes').filter(p => p.startsWith(datetime.split(' ')[0])).length
const a = alphabets[idx]
const filePath = `_notes/${datetime.split(' ')[0]}-${a}${a}.md`
const postContent = `---
title: Note
layout: default
open_heart: true
date: ${datetime}
tags: ${tags.split(',').map(tag => `\n  - ${tag}`).join('')}${lang ? `\nlang: ${lang}` : ''}
---

${content}
`

fs.writeFileSync(filePath, postContent)
