const mongoose = require('mongoose')
const { Schema } = mongoose

const vocabularySchema = Schema({
  title: {
    type: String,
    required: true,
  },
  translate: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  examples: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Example',
    },
  ],
})

const Vocalbulary = mongoose.model('Vocalbulary', vocabularySchema)

module.exports = Vocalbulary
