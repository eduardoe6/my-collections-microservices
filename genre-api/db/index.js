const mongoose = require('mongoose')

module.exports = {

    connect() {
        return mongoose.connect('mongodb://localhost:27017/db_genre', 
            { useNewUrlParser: true, useUnifiedTopology: true})
    }
}