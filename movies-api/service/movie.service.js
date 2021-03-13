const repository = require('../repository/movie.repository')

exports.findAll = async () => {
    return await repository.findAll()
}

exports.save = async (data) => {
    await repository.save(data)
}