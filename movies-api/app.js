const express = require('express')
const cors = require('cors')

const movieRoutes = require('./routes/movie.routes')

const app = express()

app.use(cors())
app.use(express.json())

movieRoutes(app)

app.listen(8082, () => {
    console.log('Server is up!')
})