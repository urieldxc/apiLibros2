const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    genere: String
})

module.exports = mongoose.model('Book', bookSchema)