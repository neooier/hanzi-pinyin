import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';


async function hwxnet() {
    const PY_URL = 'https://zd.hwxnet.com/pinyin.html';

    const YIN_URL = (yin: string) => `https://zd.hwxnet.com/pinyin/${yin}.html`;

    let result: [string, string][] = []

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
        result.push(...chars)
        console.log(`${yin} done`)
    }
    return result
}

async function gushici() {
    const PY_URL = 'https://zidian.gushici.net/py.html';

    const YIN_URL = (yin: string) => `https://zidian.gushici.net/py/${yin}.html`;

    let result: [string, string][] = []

    const resp = await fetch(PY_URL)
    const mainPage = cheerio.load(await resp.text())

    const yins = mainPage('dt').map((i, el) => mainPage(el).text())
    for (const yin of yins) {
        const resp = await fetch(YIN_URL(yin))
        const page = cheerio.load(await resp.text())
        const chars = await (async () => {
            let results: [string, string][] = []
            const elements = page('h3,li')
            let detailedYin = ''
            for (const el of elements) {
                if (el.tagName === 'h3') {
                    detailedYin = mainPage(el).text()
                    continue
                }
                if (el.tagName === 'li') {
                    const char = mainPage(el).text().slice(-1)
                    results.push([detailedYin, char])
                }
            }
            return results
        })()
        result.push(...chars)
        console.log(`${yin} done`)
    }
    return result
}

async function hanyuguoxue() {
    const PY_URL = 'https://www.hanyuguoxue.com/zidian/pinyin';

    const YIN_URL = (yin: string) => `https://www.hanyuguoxue.com/zidian/pinyin-${yin}`;

    let result: [string, string][] = []

    const resp = await fetch(PY_URL)
    const mainPage = cheerio.load(await resp.text())

    const yins = mainPage('.pinyin-list>li').map((i, el) => mainPage(el).text())
    for (const yin of yins) {
        const resp = await fetch(YIN_URL(yin))
        const page = cheerio.load(await resp.text())
        const chars = await (async () => {
            let results: [string, string][] = []
            const elements = page('.zi-list>li')
            for (const el of elements) {
                const pinyins = mainPage(mainPage(el).find('.py')[0]).text().split('、')
                const char = Array.from(mainPage(el).find('a')[0].attribs.title)[0]
                //console.log(pinyins, char)
                for (const pinyin of pinyins) {
                    results.push([pinyin, char])
                }
            }
            return results
        })()
        result.push(...chars)
        console.log(`${yin} done`)
    }
    return result
}

(async () => {
    const dict = new Map<string, string[]>()
    // const c0 = await gushici()
    // const c1 = await hwxnet()
    const c2 = await hanyuguoxue()
    for (const [yin, char] of [...c2]) {
        const yins = dict.get(char) || []
        if (!yins.includes(yin))
            yins.push(yin)
        dict.set(char, yins)
    }
    writeFileSync('dict.json', JSON.stringify(Object.fromEntries(dict), null, 4))
})()
