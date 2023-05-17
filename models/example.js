const mongoose = require('mongoose')
const { Schema } = mongoose

const exampleSchema = Schema({
  title: String,
  link: String,
})

const Example = mongoose.model('Example', exampleSchema)

module.exports = Example
