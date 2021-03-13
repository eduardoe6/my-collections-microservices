const express = require('express')
const cors = require('cors')

const moviesProxy = require('./proxy/movies-api.proxy')
const booksProxy = require('./proxy/books-api.proxy')
const genresProxy = require('./proxy/genres-api.proxy')

const app = express()

app.use(cors())
app.use(express.json())

moviesProxy(app)
booksProxy(app)
genresProxy(app)

app.listen(8080, () => {
    console.log('Gateway is up!')
})