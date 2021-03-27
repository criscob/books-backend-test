
const BASE_URL = 'https://books-backend-agile-testing.herokuapp.com/books'
const BOOKS_FIELDS = ["id", "name", "author"]
const BOOKS_TEST = [{"name": "book-test1", "author":"test1"},
{"name": "book-test2", "author":"test2"},{"name": "book-test3", "author":"test3"}]

module.exports = {
    BOOKS_FIELDS,
    BASE_URL,
    BOOKS_TEST 
}