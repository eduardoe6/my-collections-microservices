const httpProxy = require('express-http-proxy')

const moviesProxy = httpProxy("http://localhost:8082")

module.exports = (app) => {

    app.get('/movies', (req, res, next) => {
        moviesProxy(req, res, next)
    })

    app.post('/movies', (req, res, next) => {
        moviesProxy(req, res, next)
    })
}