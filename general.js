const axios = require("axios");

// Get all books
const getAllBooks = async () => {
    const res = await axios.get("/books");
    return res.data;
};

// Get by ISBN
const getBookByISBN = async (isbn) => {
    const res = await axios.get(`/books/isbn/${isbn}`);
    return res.data;
};

// Get by author
const getBooksByAuthor = async (author) => {
    const res = await axios.get(`/books/author/${author}`);
    return res.data;
};

// Get by title
const getBooksByTitle = async (title) => {
    const res = await axios.get(`/books/title/${title}`);
    return res.data;
};

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};