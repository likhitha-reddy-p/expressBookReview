const axios = require("axios");

const BASE_URL = "http://localhost:3000/books";

// Get all books
const getAllBooks = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching all books" });
    }
};

// Get book by ISBN
const getBookByISBN = async (req, res) => {
    try {
        const isbn = req.params.isbn;
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching book by ISBN" });
    }
};

// Get books by author
const getBooksByAuthor = async (req, res) => {
    try {
        const author = req.params.author;
        const response = await axios.get(`${BASE_URL}/author/${author}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books by author" });
    }
};

// Get books by title
const getBooksByTitle = async (req, res) => {
    try {
        const title = req.params.title;
        const response = await axios.get(`${BASE_URL}/title/${title}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books by title" });
    }
};

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};