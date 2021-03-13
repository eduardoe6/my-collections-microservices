const express = require('express')
const cors = require('cors')

const bookRoutes = require('./routes/book.routes')

const app = express()

app.use(cors())
app.use(express.json())

bookRoutes(app)

app.listen(8081, () => {
    console.log('Server is up!')
})