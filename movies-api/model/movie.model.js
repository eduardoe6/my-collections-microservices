const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: String,
    sinopsis: String,
    duration: Number,
    genre: String
})

module.exports = mongoose.model('Movie', bookSchema)