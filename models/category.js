const mongoose = require('mongoose')
const { Schema } = mongoose

const categorySchema = Schema({
  title: String,
  link: String,
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
