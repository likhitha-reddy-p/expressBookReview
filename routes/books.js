const express = require("express");
const router = express.Router();
const books = require("../data/books.json");

router.get("/", (req, res) => {
    res.json(books);
});

router.get("/isbn/:isbn", (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    res.json(book || "Not found");
});

router.get("/author/:author", (req, res) => {
    const result = books.filter(b => b.author === req.params.author);
    res.json(result);
});

router.get("/title/:title", (req, res) => {
    const result = books.filter(b => b.title === req.params.title);
    res.json(result);
});

module.exports = router;