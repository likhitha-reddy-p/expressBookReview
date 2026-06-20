const express = require("express");
const router = express.Router();
const books = require("../data/books.json");

// get reviews
router.get("/:isbn", (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    res.json(book.reviews);
});

// add/update review
router.post("/:isbn", (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    const { review } = req.body;

    book.reviews["user"] = review;
    res.send("Review added/updated");
});

// delete review
router.delete("/:isbn", (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);

    delete book.reviews["user"];
    res.send("Review deleted");
});

module.exports = router;