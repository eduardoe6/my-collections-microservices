const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: String,
    sinopsis: String,
    pages: Number,
    genre: String
})

module.exports = mongoose.model('Book', bookSchema)