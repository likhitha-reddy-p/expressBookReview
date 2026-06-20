const axios = require("axios");

const BASE_URL = "http://localhost:3000";

const getAllBooks = async () => axios.get(`${BASE_URL}/books`);

const getBookByISBN = async (isbn) =>
  axios.get(`${BASE_URL}/books/isbn/${isbn}`);

const getBooksByAuthor = async (author) =>
  axios.get(`${BASE_URL}/books/author/${author}`);

const getBooksByTitle = async (title) =>
  axios.get(`${BASE_URL}/books/title/${title}`);

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};