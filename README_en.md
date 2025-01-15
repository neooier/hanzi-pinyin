# Hanzi-Pinyin

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/neooier/hanzi-pinyin.git)
[![License](https://img.shields.io/github/license/neooier/hanzi-pinyin.svg?style=flat-square)](https://github.com/neooier/hanzi-pinyin/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/hanzi-pinyin.svg?style=flat-square)](https://www.npmjs.com/package/hanzi-pinyin)

[中文](README.md)

## Description
`hanzi-pinyin` is a package that provides functions to query the pinyin (romanization) of Chinese characters. It includes utilities to get both simplified and detailed pinyin representations.

## Installation
You can install the package using npm, pnpm, or yarn:

```bash
npm install hanzi-pinyin
```
```bash
pnpm add hanzi-pinyin
```
```bash
yarn add hanzi-pinyin
```

## Usage

### Importing the Package
You can import the functions from the package as follows:

```typescript
import { pinyin, detailedPinyin, all } from 'hanzi-pinyin';
```

### Functions

#### `pinyin(char: string): string[] | undefined`
Returns an array of pinyin representations of the given Chinese character, with diacritics removed.

**Example:**
```typescript
const result = pinyin('汉'); // ['han']
console.log(result);
```

#### `detailedPinyin(char: string): string[] | undefined`
Returns an array of detailed pinyin representations of the given Chinese character, including diacritics.

**Example:**
```typescript
const result = detailedPinyin('汉'); // ['hàn']
console.log(result);
```

#### `all(): Readonly<typeof dict>`
Returns the entire dictionary of characters to pinyin mappings with diacritics.

**Example:**
```typescript
const dict = all();
console.log(dict['汉']); // ['hàn']
```

## Data Source

The data in this package comes from: [汉文学网](https://zd.hwxnet.com/)

Crawling script is available at `cmd/fetcher.ts`

## License
This package is licensed under the MIT License.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## Author
- Neooier
