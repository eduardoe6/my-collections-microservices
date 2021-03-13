const db = require('../db');
const Genre = require('../model/genre.model.js');

exports.findAll = async () => {
    let con = await db.connect();

    let genres = await Genre.findAll();
    con.disconnect();

    return genres;
}