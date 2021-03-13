import axios from 'axios'

const BOOK_API = "http://localhost:8080/books"

const bookService = {

    async findAll() {
        let response = await axios.get(BOOK_API)
        return response.data
    },

    async save(data) {
        await axios.post(BOOK_API, data)
    }

}

export default bookService