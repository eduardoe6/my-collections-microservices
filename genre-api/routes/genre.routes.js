const service = require('../service/genre.service');

module.exports = (app) => {

    app.get('/genres', async (req, res) => {
        let genres = await service.findAll();
        res.json(genres);
    })
}