#!/usr/bin/env node

const { returnLinesNum, returnWordsNum, returnLettersNum } = require('./handler')

const [ node, indexFile, command, args ]  = process.argv

const data = {
  '-c': returnLettersNum,  //返回文件 file.c 的字符数
  '-w': returnLinesNum,    //返回文件 file.c 的词的数目  
  '-l': returnWordsNum    //返回文件 file.c 的行数
}

data[command].call(this, args)