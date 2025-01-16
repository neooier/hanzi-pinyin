# 汉字拼音查询包 (Hanzi-Pinyin)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/neooier/hanzi-pinyin.git)
[![License](https://img.shields.io/github/license/neooier/hanzi-pinyin.svg?style=flat-square)](https://github.com/neooier/hanzi-pinyin/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/hanzi-pinyin.svg?style=flat-square)](https://www.npmjs.com/package/hanzi-pinyin)

[English](README_en.md)

## 描述
`hanzi-pinyin` 是一个用于查询汉字拼音（罗马化）的包。它提供了获取简体和详细拼音表示的工具。

## 安装
你可以使用 npm，pnpm 或 yarn 来安装这个包：

```bash
npm install hanzi-pinyin
```
```bash
pnpm add hanzi-pinyin
```
```bash
yarn add hanzi-pinyin
```

## 使用方法

### 导入包
你可以按以下方式从包中导入函数：

```typescript
import { pinyin, detailedPinyin, all } from 'hanzi-pinyin';
```

### 函数

#### `pinyin(char: string): string[] | undefined`
返回给定汉字的拼音表示数组，不带声调。

**示例:**
```typescript
const result = pinyin('汉'); // ['han']
console.log(result);
```

#### `detailedPinyin(char: string): string[] | undefined`
返回给定汉字的详细拼音表示数组，包括声调。

**示例:**
```typescript
const result = detailedPinyin('汉'); // ['hàn']
console.log(result);
```

#### `all(): Readonly<typeof dict>`
返回整个汉字到含声调拼音映射的字典。

**示例:**
```typescript
const dict = all();
console.log(dict['汉']); // ['hàn']
```

## 数据来源

本包中的数据来源为：[汉语国学](https://www.hanyuguoxue.com/zidian/)

爬取脚本可见 `cmd/fetcher.ts`

## 许可证
本包采用 MIT 许可证。

## 贡献
欢迎贡献！请提交问题或拉取请求。

## 作者
- Neooier
