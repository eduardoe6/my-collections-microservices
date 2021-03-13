const httpProxy = require('express-http-proxy')

const booksProxy = httpProxy("http://localhost:8081")

module.exports = (app) => {

    app.get('/books', (req, res, next) => {
        booksProxy(req, res, next)
    })

    app.post('/books', (req, res, next) => {
        booksProxy(req, res, next)
    })
}