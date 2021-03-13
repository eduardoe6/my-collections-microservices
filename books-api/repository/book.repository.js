const db = require('../db')
const Book = require('../model/book.model')

exports.findAll = async () => {
    let con = await db.connect();

    let books = await Book.findAll();
    con.disconnect();

    return books;
}

exports.save = async (data) => {
    let con = await db.connect()
    let book = new Book(data)

    await db.save(book)
    con.disconnect()
}