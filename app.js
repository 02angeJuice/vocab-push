const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

const Vocabulary = require('./models/vocabulary')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

mongoose
  .connect('mongodb://127.0.0.1:27018/vocab-push')
  .then(() => {
    console.log('mongo: connect...')
  })
  .catch((err) => {
    console.log('mongo: connect error:', err)
  })

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello' })
})

app.listen(3000, () => {
  console.log('listening on port', 3000)
})
