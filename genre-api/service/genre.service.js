const repository = require('../repository/genre.repository')

exports.findAll = async () => {
    return await repository.findAll()
}