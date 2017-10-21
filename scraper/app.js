const express = require('express')
const app = express()

const Scraper = require('./scraper.js')
const s = new Scraper(app)

app.get('/', (req, res) => {
  s.sendRequest((html) => {
    console.log(html);
    res.end();
  })
})

app.listen(3000, function() {
  console.log('Express app server is listening on port 3000...')
})
