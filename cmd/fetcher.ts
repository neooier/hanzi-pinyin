import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';

const PY_URL = 'https://zd.hwxnet.com/pinyin.html';

const YIN_URL = (yin: string) => `https://zd.hwxnet.com/pinyin/${yin}.html`;

(async () => {
    const dict = new Map<string, string[]>()

    const resp = await fetch(PY_URL)
    const mainPage = cheerio.load(await resp.text())

    const yins = mainPage('.pinyin_sub_idx').map((i, el) => mainPage(el).text())
    for (const yin of yins) {
        const resp = await fetch(YIN_URL(yin))
        const page = cheerio.load(await resp.text())
        const chars = await (async () => {
            let results: [string, string][] = []
            const elements = page('.py,.ff_yh')
            let detailedYin = ''
            for (const el of elements) {
                const classes = el.attribs['class'].split(' ')
                if (classes.some(c => c === 'py')) {
                    detailedYin = mainPage(el).text()
                    continue
                }
                if (classes.some(c => c === 'ff_yh')) {
                    const char = mainPage(el).text().slice(-1)
                    results.push([detailedYin, char])
                }
            }
            return results
        })()
        console.log(chars)
        for (const [yin, char] of chars) {
            const yins = dict.get(char) || []
            yins.push(yin)
            dict.set(char, yins)
        }
        console.log(`${yin} done`)
    }
    writeFileSync('dict.json', JSON.stringify(Object.fromEntries(dict), null, 4))
})()
