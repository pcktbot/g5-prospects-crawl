const https = require('https')
const axios = require('axios').create({
  httpsAgent: new https.Agent({ rejectUnauthorized: true })
})
const $ = require('cheerio')

const rejects = [
  'tel:',
  'mailto:',
  '#',
  '.jpg',
  'javascript:void(0)',
  'javascript:;',
  '!trash'
]

module.exports = class Crawler {
  constructor (params) {
    this._url = params.url
    this._search = params.search
    this._terms = []
    this._result = null
    this.reject = rejects
  }

  set result (res) {
    this._result = res
  }
  get results () {
    return this._result
  }

  searchPage (page) {
    if (!page) return;
    let words = this._search
    words = words.split(/(?<!\\),/gm)
    words.forEach((word) => {
      word = word.replace('\\,', ',')
      if (page.includes(word)) {
        console.log()
      }
    })

  }

  run () {}
}
