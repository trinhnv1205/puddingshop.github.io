const express = require('express');
const BookService = require('../services/book');
const router = express.Router();

router.get('/home', (req, res) => {
    BookService.getBooks().then((books) => {
        res.json(books);
    }
    ).catch((err) => {
        res.status(500).json({ error: err });
    });
}
);

module.exports = router;