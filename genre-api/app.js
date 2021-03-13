const express = require('express')
const cors = require('cors')

const genreRoutes = require('./routes/genre.routes')

const app = express()

app.use(cors())
app.use(express.json())

genreRoutes(app)

app.listen(8083, () => {
    console.log('Server is up!')
})