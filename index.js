require('dotenv').config()
const express = require('express')
const app = express()
const Crawler = require('./crawler')

app.use(express.json({ limit: '1000kb' }))

app.get('/', (req, res) => {
  res.send('I\'m Listening.')
})

app.post('/', async (req, res) => {
  const crawler = new Crawler(req.body)
  const result = crawler.run()
  res.json(result)
})

app.listen(8083, () => console.log('I\'m Listening.'))
