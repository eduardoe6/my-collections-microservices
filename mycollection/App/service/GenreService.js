import axios from 'axios'

const GENRE_API = "http://localhost:8080/genres"

const movieService = {

    async findAll() {
        let response = await axios.get(GENRE_API)
        return response.data
    }
}

export default movieService