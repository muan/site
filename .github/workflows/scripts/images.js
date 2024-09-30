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

fs.writeFileSync(filePath, JSON.stringify(photos))

if (!filePath.endsWith('stories.json')) process.exit()

const date = new Date(json.uploaded)
const content = `---
layout: story
date: ${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}
tags: [ ${json.meta.tags.join(', ')} ]
title: Story
image: https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/${json.id}/public
caption: |
  ${json.meta.caption}
alt: |
  ${json.meta.alt}
---

![${json.meta.alt}](https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/${json.id}/public)

${json.meta.caption}
`

fs.writeFileSync(`_stories/${json.id}.md`, content)
