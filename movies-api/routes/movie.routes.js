const service = require('../service/movie.service')

module.exports = (app) => {

    app.get('/movies', async (req, res) => {
        let movies = await service.findAll()
        res.json(movies)
    })

    app.post('/movies', async (req, res) => {
        await service.save(req.body)
        res.end()
    })

}