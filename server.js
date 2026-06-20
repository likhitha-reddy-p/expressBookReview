const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const booksRoutes = require("./routes/books");
const reviewsRoutes = require("./routes/reviews");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/books", booksRoutes);
app.use("/reviews", reviewsRoutes);

// simple users store
let users = [];

// register
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.send("User registered successfully");
});

// login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});