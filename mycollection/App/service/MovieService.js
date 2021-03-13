import axios from 'axios'

const MOVIE_API = "http://localhost:8080/movies"

const movieService = {

    async findAll() {
        let response = await axios.get(MOVIE_API)
        return response.data
    },

    async save(data) {
        await axios.post(MOVIE_API, data)
    }

}

export default movieService