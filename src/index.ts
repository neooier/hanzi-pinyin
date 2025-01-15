import unidecode from 'unidecode'
import _dict from './dict.json'

const dict = _dict as { [key: string]: string[] }
export function pinyin(char: string): string[] | undefined {
    return dict[char]?.map(p => unidecode(p))
}

export function detailedPinyin(char: string): string[] | undefined {
    return dict[char]
}

export function all(): Readonly<typeof dict> {
    return dict
}
