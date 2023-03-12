import fs from 'fs'

const yml = fs.readFileSync('./_data/notes.yml').toString()
const notes = yml.split(/\-\sdate:\s/).reverse().filter(e => e.trim() !== '').map(note => {
  const date = note.split(/\r?\n/m, 1)[0]
  const content = note.split('content: |')[1].trim().split(/\r?\n/).map(s => s.trim()).join('\n')
  return [date, content]
})

const filenames = []
const alphabets = [...'umoacenrvwz']

for (const note of notes) {
  const datetime = note[0]
  const content = note[1]
  const date = datetime.split(' ')[0]
  let a, fileName

  while (a === null || filenames.includes(fileName)) {
    a = alphabets[Math.floor(Math.random() * alphabets.length)]
    fileName = `${date.replace(/\//g, '-')}-${a}${a}`
  }

  filenames.push(fileName)
  
  const filePath = `_notes/${fileName}.md`

  const postContent = `---
layout: default
open_heart: true
date: ${datetime}
---

${content}
`

  fs.writeFileSync(filePath, postContent)
}
