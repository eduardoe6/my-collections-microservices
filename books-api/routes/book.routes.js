const service = require('../service/book.service')

module.exports = (app) => {

    app.get('/books', async (req, res) => {
        let books = await service.findAll()
        res.json(books)
    })

    app.post('/books', async (req, res) => {
        await service.save(req.body)
        res.end()
    })

}