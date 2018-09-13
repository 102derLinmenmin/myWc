# 模拟 WC.exe 的功能实现

## 开发环境

开发语言：`node.js`

### 开发准备

- 安装 `node.js`
- 安装 `git`
- 在代码所在文件夹打开 `git bash` 输入 `npm install`
- `npm link`
- 输入 `mywc -command file` 即可运行

## 如何构建 node 命令行

### 1. 初始化文件
在空文件夹中 `npm init`，初始化文件

### 2. 创建一个 js 文件，并指定使用 `node` 解析

在 `index.js` （入口文件）中的首行写下 `#!/usr/bin/env node` 表示此文件使用 `node` 去解析。具体原因可见：[片段标识符](https://en.wikipedia.org/wiki/Shebang_%28Unix%29)。

### 3. 自定义命令操作

在 `package.json` 中添加配置
```
{
    "bin": {
        "mywc": "./index.js"
    }
}
```
自定义配置了 `mywc` 命令。

此处不用 `wc` 或者 `wc.exe` 的原因是会抛出与 win10 系统不兼容的错误。

### 4. 安装依赖和脚本，测试

## 代码原理

主要是使用 `node.js` 中的 `fs` 和 `process.argv`

`fs` 是读取文件操作指令集
`process.argv` 是获取命令行指令操作

详见报告

## 代码运行测试

在 `git bash` 中运行以下命令，`file` 可以相应替换成测试文件
```bash
mywc -c file  //返回文件 file.c 的字符数
mywc -w file  //返回文件 file.c 的词的
mywc -l file  //返回文件 file.c 的行数
```