const httpProxy = require('express-http-proxy')

const genresProxy = httpProxy("http://localhost:8083")

module.exports = (app) => {

    app.get('/genres', (req, res, next) => {
        genresProxy(req, res, next)
    })
}