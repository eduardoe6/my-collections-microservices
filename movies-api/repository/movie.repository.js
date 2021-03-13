const db = require('../db')
const Movie = require('../model/movie.model')

exports.findAll = async () => {
    let con = await db.connect();

    let movies = await Movie.findAll();
    con.disconnect();

    return movies;
}

exports.save = async (data) => {
    let con = await db.connect()
    let movie = new Movie(data)

    await db.save(movie)
    con.disconnect()
}