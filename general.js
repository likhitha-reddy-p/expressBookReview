const axios = require("axios");

const BASE_URL = "http://localhost:3000";

/**
 * Get all books
 */
const getAllBooks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data;
    } catch (error) {
        console.error("Error fetching all books:", error.message);
    }
};

/**
 * Get book by ISBN
 */
const getBookByISBN = async (isbn) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching book by ISBN:", error.message);
    }
};

/**
 * Get books by author
 */
const getBooksByAuthor = async (author) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/author/${author}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching books by author:", error.message);
    }
};

/**
 * Get books by title
 */
const getBooksByTitle = async (title) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/title/${title}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching books by title:", error.message);
    }
};

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};