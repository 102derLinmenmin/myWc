// handler.js

const fs = require("fs")
const readline = require('readline')
const path = require('path')

const readLineHandle = (args) => {
  let filepath = path.join(__dirname, args)
  let input = fs.createReadStream(filepath)
  return readline.createInterface({
    input: input
  })
}

const returnLinesNum = (args) => {
  const rl = readLineHandle(args)
  let lines = 0
  rl.on('line', (line) => {
    lines += 1
  })
  rl.on('close', () => {
    console.log(`${args}文件的行数为: ${lines}`)
  })
}

const returnWordsNum = (args) => {
  const rl = readLineHandle(args)
  let words = []
  rl.on('line', (line) => {
    const currentLineArr = line.trim().split(' ')
    const currentLine = currentLineArr.length === 0 ? line : currentLineArr
    words = [...words, ...currentLine]
  })
  rl.on('close', () => {
    console.log(`${args}文件的单词数为: ${words.length}`)
  })
}

const returnLettersNum = (args) => {
  const rl = readLineHandle(args)
  let words = []
  rl.on('line', (line) => {
    const currentLineArr = line.trim().split(' ')
    const currentLine = currentLineArr.length === 0 ? line : currentLineArr
    words = [...words, ...currentLine]
  })
  rl.on('close', () => {
    const wordsNum = words.reduce((acc, val) => {
      return acc + val.length
    }, 0)
    console.log(`${args}文件的字母数为: ${wordsNum}`)
  })
}

exports = module.exports = {
  returnLinesNum,
  returnWordsNum,
  returnLettersNum
}