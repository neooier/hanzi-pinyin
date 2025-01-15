# Pinyin-Dict

[中文](README.md)

## Description
`pinyin-dict` is a package that provides functions to query the pinyin (romanization) of Chinese characters. It includes utilities to get both simplified and detailed pinyin representations.

## Installation
You can install the package using npm, pnpm, or yarn:

```bash
npm install pinyin-dict
```
```bash
pnpm add pinyin-dict
```
```bash
yarn add pinyin-dict
```

## Usage

### Importing the Package
You can import the functions from the package as follows:

```typescript
import { pinyin, detailedPinyin, all } from 'pinyin-dict';
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
